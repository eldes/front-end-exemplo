import { FunctionComponent, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import Pagina from '../components/Pagina'
import categoriasService from '../services/categorias'

const CategoriaPage: FunctionComponent = () => {

	const { id } = useParams()
	const [categoria, setCategoria] = useState(categoriasService.ler(Number.parseInt(id ?? '')))
	const [subCategorias, setSubCategorias] = useState(categoriasService.lerTodasSubcategorias(Number.parseInt(id ?? '')))

	return (
		<Pagina titulo={categoria?.nome ?? ''}>
			<ul>
			{
				subCategorias.map( categoria =>
					<li>
						<NavLink to={`/categorias/${categoria.id}`}>{ categoria.nome }</NavLink>
					</li>
				)
			}
			</ul>
		</Pagina>
	)
}

export default CategoriaPage