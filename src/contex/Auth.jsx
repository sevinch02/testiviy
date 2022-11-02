import { createContext, useEffect, useState } from 'react';

const Context = createContext();

function AuthProvider({ children }) {
	const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
	console.log(setToken, 'settoken')

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
			console.log(token)	
		} else {
			localStorage.removeItem('token');
		}
	}, [token]);

	return (
		<Context.Provider value={[token, setToken]}>{children}</Context.Provider>
	);
}
export { Context, AuthProvider };