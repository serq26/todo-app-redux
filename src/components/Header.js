import React from 'react';
import { useSelector } from 'react-redux';
import { loginHandle, logoutHandle } from '../utils';

export default function Header() {

  const user  = useSelector(state => state.auth.user)

  const login = user => {
    loginHandle(user)
  }

  return (
    <header className='header'>
      <h2>Todo List</h2>
      {!user && (
        <nav>
          <button onClick={() => login({id: 1, username: 'user1', title: "User-1"})}>Login as User-1</button>
          <button onClick={() => login({id: 2, username: 'user2', title: "User-2"})}>Login as User-2</button>
        </nav>
      )}
      {user && (
        <nav>
          Welcome, {user.title}
          <button onClick={logoutHandle}>Logout</button>
        </nav>
      )}
    </header>
  )
}
