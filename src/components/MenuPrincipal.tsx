import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import styles from '../styles/MenuPrincipal.module.css'

const MenuPrincipal: FunctionComponent = () => {
	return (
		<nav className={ styles.root }>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/categorias">Categorias</NavLink>
		</nav>
	)
}

export default MenuPrincipal