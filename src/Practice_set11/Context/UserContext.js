import { createContext , useState } from "react";


const users = [
    {
      id: 1,
      name: 'Tanay Pratap',
      email: 'tanay@example.com',
      role: 'Super Mentor',
    },
    {
      id: 2,
      name: 'Tanvi Priya',
      email: 'tanvi@example.com',
      role: 'CEO',
    },
    {
      id: 3,
      name: 'Akanksha Choudhary',
      email: 'akanksha@example.com',
      role: 'Super Mentor',
    },
  ]

  
export const UserContext = createContext();


const UserProvider = ({children}) => {
  const [myValue , setMyValue] = useState("")
  const [obj , setObj] = useState(users)
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [role , setRole] = useState("")

    return(
        <UserContext.Provider value = {{users , myValue , setMyValue , name , email , role , setName , setEmail , setRole , obj , setObj}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserProvider

