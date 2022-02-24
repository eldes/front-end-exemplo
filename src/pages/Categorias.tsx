import { FunctionComponent } from "react";
import Pagina from "../components/Pagina";

const CategoriasPage: FunctionComponent = () => {

	const categorias = [
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