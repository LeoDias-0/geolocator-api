class InvalidAddressError extends Error {
	status: number

	constructor() {
		super('Endereço(s) inválido(s)!')
		this.name = 'InvalidAddressError'
		this.status = 404
	}
}


export default InvalidAddressError