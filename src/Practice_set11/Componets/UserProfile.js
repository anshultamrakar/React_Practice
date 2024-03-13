import { useContext } from "react"
import { UserContext } from "../Context/UserContext"


const UserProfile = () => {
    const {users , obj , setObj} = useContext(UserContext)

    const handleChange = (e) => {
       const filtername = users.filter(user => user.name === e.target.value)
       setObj(filtername)
    }
     
    return(
        <div>
           <h2>UserProfile</h2>
            <p>Select any user from the dropdown </p>
                    <label for="value">Users : </label>
            <select id = "value" onChange={handleChange} >
                        {users.map(user => (
                            <option key = {user.id} value = {user.name}>{user.name}</option>
                        ))}
            </select>
        <h3>Name : {obj[0].name}</h3>
        <h3>Email : {obj[0].email}</h3>
        </div>
    )
}

export default UserProfile