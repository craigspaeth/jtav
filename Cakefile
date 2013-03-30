fs = require 'fs'
path = require 'path'
global.nap = require 'nap'
jade = require 'jade'

nap
  mode: 'production'
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
nap._assetsDir = 'assets'

compileFld = (fld) ->
  viewFld = "src/views/#{fld}"
  for file in fs.readdirSync(viewFld) \
      when path.extname(file) is '.jade' and file[0] isnt '_'
    fs.writeFileSync "public/#{fld}#{file.split('.')[0]}.html", 
      jade.compile(fs.readFileSync("#{viewFld}#{file}"),
        pretty: true
        filename: "#{viewFld}#{file}"
      )() 

task 'compile', ->
  compileFld ''
  compileFld 'procedures/'
  nap.package()