import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import useInputs from "./useInputs";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false,
    }
  ]  
}


function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? {...user, active: !user.active }
          : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {users} = state;

  const count = useMemo(() => countActiveUsers(users),[users])

  return (
    <UserDispatch.Provider value = {dispatch}>
    <CreateUser />
    <UserList users={users}/>
    <div>활성 사용자 수: {count} </div>
    </UserDispatch.Provider>
  )
}

export default App;