import getAddress from '../helpers/getAdress'

import InvalidAddressError from '../errors/InvalidAddressError'

import haversineDistance from '../utils/haversineDistance'

const createAddressesList = async (addresses: string[]) => {
	const addressPromises = addresses.map(address => getAddress(address))

	const resolvedAddressPromises = await Promise.all(addressPromises)

	const addressesList = resolvedAddressPromises.map(({ data }) => {
		if (data.status !== 'OK') throw new InvalidAddressError()

		return {
			address: data.results[0].formatted_address,
			location: data.results[0].geometry.location
		}
	})

	return addressesList
}

const calculateDistances = (addressesList) => {
	const distances = []
	const len = addressesList.length

	for (let i = 0; i < len; i++) {
		let addressObj = {
			addressInfo: addressesList[i],
			otherAddresses: [],
			nearest: { distance: Number.POSITIVE_INFINITY },
			farest: { distance: Number.NEGATIVE_INFINITY }
		}
		for (let j = 0; j < len; j++) {
			if (i === j) continue

			const distance = haversineDistance(addressesList[i].location, addressesList[j].location)

			const otherAddressInfo = {
				addressInfo: addressesList[j],
				distance,
			}

			addressObj.otherAddresses.push(otherAddressInfo)

			if (otherAddressInfo.distance < addressObj.nearest.distance) addressObj.nearest = otherAddressInfo
			if (otherAddressInfo.distance > addressObj.farest.distance) addressObj.farest = otherAddressInfo
		}

		distances.push(addressObj)
	}

	return distances
}

export {
	createAddressesList,
	calculateDistances
}