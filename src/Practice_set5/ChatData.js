import { fakeFetch } from "./FakeFetch"
import { useState , useEffect } from "react"

const ChatData = () => {
    const [chats , setChats] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
     try{
        const response = await fakeFetch("https://example.com/api/userchat")
        if(response.status === 200){
            setChats(response.data)
            setIsLoading(false)
        }

     }catch(err){
        console.log(err.message)
     }
    }
    return(
        <div>
        <h2>Chat Data</h2>
        {chats.map(chat => (
            <div>
                <h3>{chat.name}'s chat</h3>
                {chat.messages.map(chatting => (
                    <ul>
                    <li>{chatting.from} : {chatting.message}</li>
                    </ul>
                ))}
            </div>
        ))}
        </div>
    )
}

export default ChatData