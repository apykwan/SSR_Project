import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
  const { currentUser, status, error } = useSelector(state => state.auth);

  if (!currentUser && status !== 'loading') return <Navigate to="/" replace={true} />
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return currentUser ? <Outlet /> : null;
}

export default RequireAuth;