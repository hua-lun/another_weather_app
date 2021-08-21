const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=15fb174bfea69e6ed15d49c55b8c5f99&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current
            callback(undefined, 'It is currently ' + current.temperature + ' degress out. It feels like ' + current.feelslike + ' degrees')

        }
    })
}

module.exports = forecast