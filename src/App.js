import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainIndex from './components/landing/index'
import './App.css'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainIndex />}></Route>
			</Routes>
		</BrowserRouter>
    );
}

export default App;
