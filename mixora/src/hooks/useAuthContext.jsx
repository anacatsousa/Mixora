import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('AuthContext is undefined. Wrap your component tree with <AuthProvider>');
	}

	return context;
};
