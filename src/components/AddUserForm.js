"use client"
import { useState } from "react"
import axios from "axios"

// this is a client component, it will be rendered on the client
// in other words, the code will be run in the user's browser
const Form = ({setUsers}) => {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post("/api/user", {
                id,
                username,
                email,
                age
            })

            const user = response.data.user
            setUsers((prev) => [...prev, user])
    
        }
       
         catch (err) {
            alert('Error could not create user')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="id">ID</label>
            <input value={id} onChange={(e) => setId(e.target.value)} type="text" id="id" name="id" />
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="age">Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="age" name="age" />
            <input type="submit" value="Submit" />

        </form>
    )
}

export default Form