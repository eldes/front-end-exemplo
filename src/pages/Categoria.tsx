import { FunctionComponent, MouseEventHandler, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Pagina from '../components/Pagina'
import Categoria from "../models/categoria"
import categoriasService from '../services/categorias'
import Produto from '../models/produto'

const CategoriaPage: FunctionComponent = () => {

	const { id } = useParams()
	const [categoria, setCategoria] = useState<Categoria | null>(null)
	const [produtos, setProdutos] = useState<Produto[]>()
	
	useEffect(() => {
		categoriasService.ler(Number.parseInt(id ?? ''), categoria => setCategoria(categoria))
		categoriasService.lerProdutos(Number.parseInt(id ?? ''), produtos => setProdutos(produtos))
	})

	return (
		<Pagina titulo={categoria?.nome ?? ''}>
			<ul>
				<li>
					Produto 1
				</li>
				<li>
					Produto 2
				</li>
			</ul>
		</Pagina>
	)
}

export default CategoriaPage