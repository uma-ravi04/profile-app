import React, { createContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Loader from '../components/Loader';
import Alert from '../components/Alert';


const BaseUrl = 'https://web-server-yg8w.onrender.com/';

const initialState = {
  user: {
    displayName: 'User',
    phoneNumber: '9876543210',
    firstName: '',
    lastName: '',
    workNumber: '',
    email: '',
    location: ''
  },
  loading: false,
  alert: null
};

export const UserContext = createContext({
  user: initialState.user,
  saveUser: (user) => { },
  register: '',
  handleSubmit: (val) => { },
  watch: {},
  reset: () => { },
  loading: false
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);
  const [loading, setLoading] = useState(initialState.loading);
  const [alert, setAlert] = useState(initialState.alert);
  const { register, handleSubmit, watch, reset } = useForm();


  const saveUser = async (user) => {
    setLoading(true);
    axios.post(BaseUrl + 'user', user).then(res => {
      setUser(res.data);
      setLoading(false);
      setAlert({ severity: "success", alertContent: "Data saved successfully" });
    }).catch(err => {
      console.log("Error occured", err);
      setLoading(false);
      setAlert({ severity: "error", alertContent: "Unable to save data at this moment" });
    })
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUser,
        register,
        handleSubmit,        
        watch,
        reset
      }}
    >
      {children}
      {<Loader isLoading={loading} />}
      {alert && <Alert alert={alert} setAlert={setAlert} />}
    </UserContext.Provider>
  );
};