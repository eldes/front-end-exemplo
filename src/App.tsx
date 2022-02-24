import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CategoriasPage from './pages/Categorias'

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/categorias' element={<CategoriasPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
