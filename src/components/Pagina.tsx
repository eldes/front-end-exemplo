import { FunctionComponent } from "react"
import MenuPrincipal from '../components/MenuPrincipal'

type Props = {
	titulo: string
}

const Pagina: FunctionComponent<Props> = ({ titulo, children }) => {
	return (
		<div>
			<header>
				<MenuPrincipal />
			</header>
			<main>
				<h1>{ titulo }</h1>
				{ children }
			</main>
			<footer>
				&copy; Eldes
			</footer>
		</div>
	)
}

export default Pagina