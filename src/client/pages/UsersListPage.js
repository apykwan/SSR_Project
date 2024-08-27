import { Helmet } from 'react-helmet-async';

function UsersList ({ userData: { users, status } }) {
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  function renderUsers() {
    if (!users || users.length === 0) return <li>No users available</li>;
    return users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  function head() {
    return (
      <Helmet>
        <title>{`${users.length > 0 ? users.length : 0} Users Loaded`}</title>
        <meta property="og:title" content="User's names" />
      </Helmet>
    );
  } 

  return (
    <div>
      {head()}
      Here is a big list of Users
      <ul>{renderUsers()}</ul>
    </div>
  );
}

export default UsersList;