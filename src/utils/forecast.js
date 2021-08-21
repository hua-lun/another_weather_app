const request = require('request')
const key = require('./utils/config')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + key.WEATHER_API + '&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current
            console.log()

            callback(undefined, "It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees.")
        }
    })
}

module.exports = forecast