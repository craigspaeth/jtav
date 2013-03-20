connect = require 'connect'
jade = require 'jade'
fs = require 'fs'
path = require 'path'
global.nap = require 'nap'

nap
  assets:
    css:
      all: [
        'src/styles/**/*.styl'
      ]
    js:
      all: [
        'src/scripts/vendor/google-maps-api.js'
        'src/scripts/vendor/gmaps.js'
        'src/scripts/vendor/jquery.js'
        'src/scripts/**/*.coffee'
      ]

compileFld = (fld) ->
  viewFld = "src/views/#{fld}"
  for file in fs.readdirSync(viewFld) \
      when path.extname(file) is '.jade' and file[0] isnt '_'
    fs.writeFileSync "public/#{fld}#{file.split('.')[0]}.html", 
      jade.compile(fs.readFileSync("#{viewFld}#{file}"),
        pretty: true
        filename: "#{viewFld}#{file}"
      )() 

app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public', maxAge: 0))
  .use((req, res) ->
    compileFld ''
    compileFld 'procedures/'
    res.end('')
  ).listen 3000