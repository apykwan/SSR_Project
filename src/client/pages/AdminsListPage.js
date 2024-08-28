function AdminsListPage ({ adminData: { admins, status } }) {
  function renderAdmins () {
    return admins.length > 0 ? (
      admins.map(admin => (
        <li key={admin.id}>{admin.name}</li>
      ))
    ) : (
      <div>No Admin</div>
    );
  }

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
}

export default AdminsListPage;