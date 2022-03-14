import axios from "axios"
import Categoria from "../models/categoria"
import Produto from "../models/produto"
import servicesConfig from './config'

type lerCategoriasCallback = (categorias: Categoria[]) => void
type lerCategoriaCallback = (categoria: Categoria) => void
type lerProdutosCallback = (produtos: Produto[]) => void

const categoriasService = {
	lerTodas: (callback: lerCategoriasCallback) => {
		axios.get<Categoria[]>(`${servicesConfig.host}/categorias`)
		.then((res) => {
			callback(res.data)
		})
	},

	lerTodasPrincipais: (callback: lerCategoriasCallback) => {
		axios.get<Categoria[]>(`${servicesConfig.host}/categorias?idPai=null`)
		.then(res => callback(res.data.filter(categoria => categoria.idPai === null)))
	},

	ler: (id: number, callback: lerCategoriaCallback) => {
		axios.get<Categoria>(`${servicesConfig.host}/categorias/${id}`)
		.then(res => callback(res.data))
	},

	lerProdutos: (id: number, callback: lerProdutosCallback) => {
		axios.get<Produto[]>(`${servicesConfig.host}/categorias/${id}/produtos`)
		.then(({data: produtos}) => callback(produtos))
	},
}

export default categoriasService