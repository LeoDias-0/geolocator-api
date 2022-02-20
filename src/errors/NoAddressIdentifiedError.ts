class NoAddressIdentifiedError extends Error {
	status: number

	constructor() {
		super('Nenhum endereço identificado!')
		this.name = 'NoAddressIdentifiedError'
		this.status = 422
	}
}


export default NoAddressIdentifiedError