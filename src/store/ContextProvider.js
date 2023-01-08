import React, { createContext, useState } from 'react';

const initialState = {
  user: { displayName: 'User', phoneNumber: '9876543210' },
  disableReset: true,
  firstName:'',
  lastName:'',
  displayName:'',
  phoneNumber:987654321,
  workNumber:'',
  location:''
};

export const UserContext = createContext({
  user: initialState.user,  
  disableReset: initialState.disableReset,
  saveUser:(user)=>{},
  getUser: (id) => { }
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);  
  const [disableReset, setReset] = useState(initialState.disableReset);

  const getUser = async (id) => {


  };

  const saveUser= async(user)=>{

  };

  return (
    <UserContext.Provider
      value={{ user, disableReset, getUser, saveUser }}
    >
      {children}
    </UserContext.Provider>
  );
};