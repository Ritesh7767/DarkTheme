import React, { useState, createContext } from 'react'

export let UserContext = createContext()

const UserContextProvider = ({children}) => {

    let [userData, setUserData] = useState([
      {
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },
      {
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },{
        name : "Ritesh Laxman Gupta",
        profession : "Backend Developer",
        isActive : true,
        hobbie : "coding",
        email : "ritesh776782@gmail.com",
        contactNo : 7767823741,
        DOB : "02-05-2003" 
      },
  ])

  return (
    <UserContext.Provider value={userData}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider