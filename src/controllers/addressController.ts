import { Request, Response } from 'express'
import InsufficientNumberOfAddressesError from '../errors/InsufficientNumberOfAddressesError'
import NoAddressIdentifiedError from '../errors/NoAddressIdentifiedError'

import * as addressService from '../services/addressService'

const returnDistances = async (req: Request, res: Response) => {

	const addresses: string[] = req.body?.addresses

	try {
		if (addresses === undefined) throw new NoAddressIdentifiedError()

		if (addresses.length < 2) throw new InsufficientNumberOfAddressesError()

		const addressesList = await addressService.createAddressesList(addresses)

		const distances = addressService.calculateDistances(addressesList)

		return res.status(200).send(distances)

	} catch (e) {
		const customErrors = [
			'NoAddressIdentified',
			'InvalidAddressError',
			'InsufficientNumberOfAddressesError'
		]

		if (customErrors.includes(e.name)) return res.status(e.status).send(e.message)

		return res.status(500).send('Erro interno no servidor!')
	}
}

export {
	returnDistances
}