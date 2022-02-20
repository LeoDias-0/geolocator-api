const makeParams = (address: string) => {
	return {
		params: {
			address,
			key: process.env.API_KEY,
			language: 'pt-BR'
		}
	}
}

export default makeParams