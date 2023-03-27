const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=328fc27fbafe6d5cd51ac0e6363c0de7&query=' +  latitude + ',' + longitude
    request({url, json: true}, (error, {body} = {}) => {

        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined , `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`)
        }
    })
}

module.exports = forecast