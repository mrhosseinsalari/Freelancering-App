import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست کاربران
      </h1>
      <UsersTable />
    </div>
  );
}

export default Users;
