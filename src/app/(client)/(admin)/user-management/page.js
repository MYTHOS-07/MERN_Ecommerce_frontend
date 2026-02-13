"use client";

import React, { useEffect, useState } from "react";
import UsersTable from "@/components/admin/users/Table";
import { getAllUsers } from "@/api/users";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">User Management</h1>
      <section className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden dark:border-2 dark:border-gray-600">
        <UsersTable users={users} loading={loading} />
      </section>
    </>
  );
};

export default UserManagementPage;
