import { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [currentChannel, setCurrentChannel] = useState(null);
    async function joinChannel(channelId) {
        socket.emit('joinChannel', {channelId}, (data) => {
            console.log("Successfully joined the channel", data);
            setCurrentChannel(data?.data);
        });
    }

    const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL)

    return (
        <SocketContext.Provider value={{socket, joinChannel, currentChannel}}>
            { children }
        </SocketContext.Provider>
    )
}

export default SocketContext;