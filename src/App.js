import './App.scss';
// import Button from './components/UI/Button/Button';
// import Auth from './containers/Auth/Auth';
// import Modal from './components/UI/Modal/Modal';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/pages/Main/Main';
import Study from './components/pages/Study/Study';
import FlashcardsHelp from './components/pages/FlashcardsHelp/FlashcardsHelp';
import Layout from './hoc/Layout/Layout';
import QuestionsHelp from './components/pages/QuestionsHelp/QuestionsHelp';
import SpacedRepetitionHelp from './components/pages/SpacedRepetitionHelp/SpacedRepetitionHelp';
import Flashcards from './components/pages/Flashcards/Flashcards';
import FlashcardsEditDecks from './containers/FlashcardsEditDecks/FlashcardsEditDecks';

function App() {
	let routes = (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/study" exact component={Study} />

			<Route path="/flashcards-help" exact component={FlashcardsHelp} />
			<Route path="/spaced-repetition-help" exact component={SpacedRepetitionHelp} />
			<Route path="/questions-help" exact component={QuestionsHelp} />
			<Route path="/flashcards" exact component={Flashcards} />
			<Route path="/flashcards-edit-decks" exact component={FlashcardsEditDecks} />

			{/* <Redirect to="/" /> */}
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
			<Layout>{routes}</Layout>
			<Footer />
		</div>
	);
}

export default withRouter(App);
