import { FunctionComponent } from "react";
import Pagina from "../components/Pagina";

const CategoriasPage: FunctionComponent = () => {
	return (
		<Pagina titulo="Categorias">
			<ul>
				<li>Moveis</li>
				<li>Eletrônicos</li>
				<li>Publicações</li>
			</ul>
		</Pagina>
	)
}

export default CategoriasPage