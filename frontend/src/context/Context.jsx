import React , {createContext,  useState, useEffect} from "react"
import axios from "axios"


export const Context = createContext(null);

const ContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");
    const [roomList,setRoomList] = useState([]);


const fetchRoomList = async () => {
    
    try {
        const response = await axios.get(`${url}/api/room/list`);
        setRoomList(response.data.data);
       
    } catch (error) {
        console.error("Error fetching room list:", error);
        console.log("error")
    }
}

useEffect(() => {
    fetchRoomList();
  }, []); // Empty dependency array ensures it runs once on mount
  

const contextValue = {
    url,
    token,
    setToken,
    fetchRoomList,
    roomList,
    setRoomList,
}

return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)
}

export default ContextProvider;