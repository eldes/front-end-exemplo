const categoriasService = {
	lerTodas: () => {
		return [
			{
				id: 1,
				nome: 'Móveis',
				idPai: null
			},
			{
				id: 2,
				nome: 'Eletrônicos',
				idPai: null
			},
			{
				id: 3,
				nome: 'Publicações',
				idPai: null
			},
		]
	}
}

export default categoriasService