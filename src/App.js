import './App.css';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewAccount from './pages/NewAccountPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SignUpPage />} />
				<Route path='/new-account' element={<NewAccount />} />
			</Routes>
		</Router>
	);
}

export default App;
