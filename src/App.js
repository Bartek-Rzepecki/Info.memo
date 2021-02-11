import './App.scss';
// import Button from './components/UI/Button/Button';
// import Auth from './containers/Auth/Auth';
// import Modal from './components/UI/Modal/Modal';
import {Route, Switch, withRouter} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
function App() {
	let routes = (
		<Switch>
			<Route path="/auth"></Route>
			<Route></Route>
		</Switch>
	);

	return (
		<div className="App">
			{/* <Button>STUDY</Button>
			< show={true} modalClosed={() => {}}>
				<Auth />
			</
			Modal> */}
			<Navbar />
			{routes}
			<Main />
			<Footer />
		</div>
	);
}

export default withRouter(App);
