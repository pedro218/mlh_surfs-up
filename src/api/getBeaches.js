import axios from 'axios'

const getBeaches = async () => {
  const response = await axios.get('https://api.coastal.ca.gov/access/v1/locations')
  return response.data
}

export default getBeaches