import axios from 'axios'
import makeParams from './makeParams'

const getAddress = async (address: string) => {
	return axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, makeParams(address))
}

export default getAddress