module.exports = nap = require 'nap'

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
        'src/scripts/**/*.coffee'
      ]