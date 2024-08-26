function UsersList ({ userData: { users, status } }) {
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  function renderUsers() {
    if (!users || users.length === 0) return <li>No users available</li>;
    return users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  return (
    <div>Here is a big list of Users
      <ul>{renderUsers()}</ul>
    </div>
  );
}

export default UsersList;