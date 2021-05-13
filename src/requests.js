
const getPuzzle = async (wordcount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordcount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle')
    }
}
const getCurrentCountry = async () => {
    const location = await getLocationDetails()
    return getCountryDetails(location.country)
    
}

 

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
        
    }else{
        throw new Error('Unable to fetch data')
    }
    }       
  

const getLocationDetails = async () => {
    const response = await fetch('//ipinfo.io/json?token=7d8aeaaca1b9ac')
    if(response.status === 200){
       return response.json()
        
        
    }else{
        throw new Error('Unable to fetch data')
    }
}

export {getPuzzle as default}