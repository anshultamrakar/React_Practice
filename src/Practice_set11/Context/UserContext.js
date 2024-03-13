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
    return(
        <UserContext.Provider value = {{users , obj , setObj}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserProvider

