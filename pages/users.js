import Link from "next/link";
import Layout from "../components/Layout";
// import React, { useState, useEffect } from "react";

const Users = ({ users }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "Anna" },
  //     { id: 2, name: "Rafa" },
  //   ]);

  //   useEffect(async () => {}, []);

  return (
    <Layout title="Users Page">
      <h1>Users Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
}
