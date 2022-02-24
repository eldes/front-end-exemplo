import { FunctionComponent, useState } from 'react'
import Pagina from '../components/Pagina'
import Categoria from '../models/categoria'
import categoriasService from '../services/categorias'

const CategoriasPage: FunctionComponent = () => {

	const [categorias, setCategorias] = useState<Categoria[]>(categoriasService.lerTodas())

	return (
		<Pagina titulo="Categorias">
			<ul>
			{
				categorias.map( categoria =>
					<li>
						{ categoria.nome }
					</li>
				)
			}
			</ul>
		</Pagina>
	)
}

export default CategoriasPage