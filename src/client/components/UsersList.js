import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../reducers/usersReducer';

function UsersList () {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchUsers());
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  function renderUsers() {
    if (!users || users.length === 0) return <li>No users available</li>;
    return users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  return (
    <div>Here is a big list of users
      <ul>{renderUsers()}</ul>
    </div>
  );
}

export default UsersList;