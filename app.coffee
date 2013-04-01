connect = require 'connect'
compileFld = require './compile_fld'

app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public', maxAge: 0))  
app.listen 3000, -> console.log "Listening on 3000"