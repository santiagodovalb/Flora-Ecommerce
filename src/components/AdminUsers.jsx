import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const [rol, setRol] = useState(0)

  const history = useHistory()

  useEffect(() => {
    axios
      .get("/api/users/allUsers")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/users/allUsers/${id}`)
    .then(() => history.push('/admin'))
  }

  const handleRol = (e) => {
      setRol(e.target.value)
  } 

  const handleSubmit = (id) => {
      console.log('ENTRA', typeof rol)
      axios.put(`/api/users/allUsers/${id}`, {rolId: Number(rol)})
      .then(() => history.push('/admin'))
  }

  return (
    <div>
      {console.log(users)}
      <h1>hola</h1>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.nick}</h2>
            <select onChange={handleRol}>
                <option>Select Role</option>
                <option value='1'>Admin</option>
                <option value='2'>User</option>
            </select>
            <button onClick={() => handleSubmit(user.id)} type='button'>Set role</button>
            <button onClick={() => handleDelete(user.id)} type="button">
              Delete user
            </button>
          </div>
        );
      })}
    </div>
  );
}
