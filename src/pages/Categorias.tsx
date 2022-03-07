import { FunctionComponent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Pagina from '../components/Pagina'
import Categoria from '../models/categoria'
import categoriasService from '../services/categorias'

const CategoriasPage: FunctionComponent = () => {

	const [categorias, setCategorias] = useState<Categoria[]>([])
	
	useEffect(() => {
		categoriasService.lerTodasPrincipais(categorias => setCategorias(categorias))
	})

	return (
		
		<Pagina titulo="Categorias">
			<ul>
			{
				categorias.map( categoria =>
					<li>
						<NavLink to={`/categorias/${categoria.id}`}>{ categoria.nome }</NavLink>
					</li>
				)
			}
			</ul>
		</Pagina>
	)
}

export default CategoriasPage