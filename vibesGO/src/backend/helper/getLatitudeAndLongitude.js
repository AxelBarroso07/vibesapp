const axios = require("axios")

const getLatitudeAndLongitude = async(street, number, city, province)=> {
    const baseUrl = 'https://geocode.maps.co'
    const citySanitized = city.replace(' ', '+')
    const streetSanitized = street.replace(' ', '+')
    const provinceSanitized = province.replace(' ', '+')

    const params = `${baseUrl}/search?q=${streetSanitized}+${number}+${citySanitized}+${provinceSanitized}`

    const {data} = await axios.get(params)

    console.log({
        latitude: data[0].lat,
        longitude: data[0].lon
    })

    return {
        latitude: data[0].lat,
        longitude: data[0].lon
    }
}

module.exports = {
    getLatitudeAndLongitude
}