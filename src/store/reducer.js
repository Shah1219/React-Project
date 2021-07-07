

const INTIAL_STATE = {
    
        
        covid: [],
        country:[]
    
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "COVIDDATA":
            return {
                ...state,
                covid: action.covid
            }

        case "COUNTRIESDATA":
            return {
                ...state,
                country: action.country

            }
        default:
            return state;
    }

}
