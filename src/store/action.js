

const getData = () => {
    return (dispatch) => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(response => response.json())
            .then(json => dispatch({
                type:"COVIDDATA",
                covid: json 
            }))
    }

}
const getCountry = () => {
    return (dispatch) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => dispatch({type:"COUNTRIESDATA",country: json }))
    }

}



export {
    getData , getCountry
}