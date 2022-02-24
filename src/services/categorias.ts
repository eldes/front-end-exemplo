const categoriasService = {
	lerTodas: () => {
		return categoriasMock
	},

	lerTodasPrincipais: () => {
		return categoriasMock.filter(categoria => categoria.idPai === null)
	},

	lerTodasSubcategorias: (id: number) => {
		return categoriasMock.filter(categoria => categoria.idPai === id)
	},

	ler: (id: number) => {
		return categoriasMock.find(categoria => categoria.id === id)
	},
}

const categoriasMock = [
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
	{
		id: 4,
		nome: 'Revistas',
		idPai: 3
	},
	{
		id: 5,
		nome: 'Jornais',
		idPai: 3
	},
]

export default categoriasService