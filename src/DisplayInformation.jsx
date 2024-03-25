import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import {ThemeContext} from "./ThemeContext"

const DisplayInformation = () => {
    let userData = useContext(UserContext)
    let {theme} = useContext(ThemeContext)

    let myStyle = {
        backgroundColor : theme ? "#203A58" : "#fff",
        color : theme ? "white" : "black",
    }
  return (
    <table style={myStyle}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Profession</th>
                <th>isActive</th>
                <th>hobbie</th>
                <th>Email Id</th>
                <th>Contact No.</th>
                <th>D.O.B</th>
            </tr>
        </thead>
        <tbody>
        {userData.map(ele => {
            let {name, profession, isActive, hobbie, email, contactNo, DOB} = ele
            return (
                    <tr>
                        <td>{name}</td>
                        <td>{profession}</td>
                        <td>{isActive ? "Yes" : "No"}</td>
                        <td>{hobbie}</td>
                        <td>{email}</td>
                        <td>{contactNo}</td>
                        <td>{DOB}</td>
                    </tr> 
                )
            })}
        </tbody>
    </table>
  )
}

export default DisplayInformation