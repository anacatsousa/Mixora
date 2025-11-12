import Loading from '../components/Loading/Loading';
import useUser from '../hooks/useUser';

function AccountPage() {
	const { users, isLoading } = useUser();

	if (isLoading) return <Loading />;

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.name} - {user.email}
				</li>
			))}
		</ul>
	);
}

export default AccountPage;
