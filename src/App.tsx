import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CategoriasPage from './pages/Categorias'
import CategoriaPage from './pages/Categoria'

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/categorias' element={<CategoriasPage />} />
				<Route path='/categorias/:id' element={<CategoriaPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
