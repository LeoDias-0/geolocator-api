import { Location } from '../types'

const haversineDistance = (loc1: Location, loc2: Location) => {
	let { lat: lat1, lng: lgn1 } = loc1
	let { lat: lat2, lng: lgn2 } = loc2

	const toRadian = (angle: number) => (Math.PI / 180) * angle
	const distance = (a: number, b: number) => (Math.PI / 180) * (a - b)
	const RADIUS_OF_EARTH_IN_KM = 6371

	const [dLat, dLgn] = [distance(lat2, lat1), distance(lgn2, lgn1)]

	lat1 = toRadian(lat1)
	lat2 = toRadian(lat2)

	const a =
		Math.pow(Math.sin(dLat / 2), 2) +
		Math.pow(Math.sin(dLgn / 2), 2) * Math.cos(lat1) * Math.cos(lat2)
	const c = 2 * Math.asin(Math.sqrt(a))

	const finalDistance = RADIUS_OF_EARTH_IN_KM * c

	return finalDistance
}

export default haversineDistance