import React, { useEffect, useState } from "react";
import User from "./User";
import { fetchUsers } from "../utils/fetchUsers";
import Input from "./Input";

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setFilterUsers(data);
      } catch (error) {
        throw error(error);
      }
    }

    getUsers();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    const keyword = value.toLowerCase().trim();
    searchUser(users, keyword);
  };

  const searchUser = (source, keyword) => {
    if (keyword) {
      const filteredData = users.filter((item) => {
        const matchName = item.name.toLowerCase().includes(keyword);
        const matchEmail = item.email.toLowerCase().includes(keyword);
        const matchUsername = item.username.toLowerCase().includes(keyword);

        return matchName || matchEmail || matchUsername;
      });

      setFilterUsers(filteredData);
    } else {
      setFilterUsers(users);
      console.log("kesono");
    }
  };

  return (
    <>
      <section className="mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-3">
          <Input
            className="border border-blue-100 px-2"
            type="text"
            onChange={handleChange}
            placeholder="Looking for a user? Type 'Bret'"
          />
        </div>
        {filteredUsers.length === 0 ? (
          <p>No user found</p>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {filteredUsers.map((user, index) => (
              <User user={user} key={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Users;
