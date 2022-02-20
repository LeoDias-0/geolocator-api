class InsufficientNumberOfAddressesError extends Error {
	status: number

	constructor() {
		super('Devem haver ao menos dois endereços.')
		this.name = 'InsufficientNumberOfAddressesError'
		this.status = 411
	}
}


export default InsufficientNumberOfAddressesError