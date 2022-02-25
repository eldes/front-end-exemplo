import { FunctionComponent, MouseEventHandler, useState } from "react"
import { useParams } from "react-router-dom"
import Pagina from '../components/Pagina'
import categoriasService from '../services/categorias'

const CategoriaPage: FunctionComponent = () => {

	const { id } = useParams()
	const [categoria, setCategoria] = useState(categoriasService.ler(Number.parseInt(id ?? '')))

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