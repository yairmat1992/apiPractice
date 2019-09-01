const config = {
    codeUrl: `https://restcountries.eu/rest/v2/alpha`,
    languageUrl: `https://restcountries.eu/rest/v2/lang`
}

let countriesByLanguage = []
function getCountryByCode(countryCode) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${config.codeUrl}/${countryCode}`,
            method: "GET",
            success: function (country) {
                resolve(country)
            },
            error: function (err) {
                reject(err)
            }
        })
    })

}
function getCountryByLanguage(language) {
    return $.ajax({
        url: `${config.languageUrl}/${language}`,
        method: "GET",
    })
}

