import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id='
    const response = await axios .get(url, {
params: {
    qury: 'cars'
}
        
    })
    console.log(response)
}
export default searchImage