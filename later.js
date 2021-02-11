const [isAuthorizing, setIsAuthorizing] = useState(true);

<Modal show={isAuthorizing} modalClosed={() => setIsAuthorizing(state => !state)}>
	chuj
</Modal>;

const authSetName = token => {
	const name = axios
		.post(lookUpProfileLink, {
			idToken: token,
		})
		.then(({data}) => {
			console.log(data);
			return data.users[0];
		})
		.then(users => {
			console.log(users);
		});
	localStorage.setItem('name', name);
	console.log(name);
};
