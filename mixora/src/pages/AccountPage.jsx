import Loading from '../components/Loading/Loading';
import { useNavigate } from 'react-router';
import Button from '../components/Button/Button';
import '../scss/components/_static-page.scss';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import Container from '../components/Container/Container';
import { useAuthContext } from '../hooks/useAuthContext';

function AccountPage() {
	const { user, loading, logout } = useAuthContext();
	const navigate = useNavigate();

	if (loading) return <Loading />;

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<section className="static-page">
			<HeaderStaticPages title="Account" />
			{!user ? (
				<>
					<Container>
						<div className="static-page__container">
							<h3 className="static-page__subtitle-account">You are not logged in</h3>
							<p>Please log in to view your account details.</p>
							<Button text="Go to Login" onClick={() => navigate('/login')} />
						</div>
					</Container>
				</>
			) : (
				<>
					<Container>
						<div className="static-page__account">
							<div className="static-page__info-account">
								<img className="static-page__avatar" src={user.avatar} alt={user.name} />
								<p>
									<strong>Nome:</strong> {user.name}
								</p>
								<p>
									<strong>Email:</strong> {user.email}
								</p>
								<p>
									<strong>ID:</strong> {user.id}
								</p>
							</div>
							<Button text="Logout" onClick={handleLogout} />
						</div>
					</Container>
				</>
			)}
		</section>
	);
}

export default AccountPage;
