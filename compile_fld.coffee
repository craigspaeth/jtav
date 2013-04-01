fs = require 'fs'
path = require 'path'
jade = require 'jade'
global.nap = require './nap'


module.exports = (fld) ->
  viewFld = "src/views/#{fld}"
  for file in fs.readdirSync(viewFld) \
      when path.extname(file) is '.jade' and file[0] isnt '_'
    fs.writeFileSync "public/#{fld}#{file.split('.')[0]}.html", 
      jade.compile(fs.readFileSync("#{viewFld}#{file}"),
        pretty: true
        filename: "#{viewFld}#{file}"
      )()