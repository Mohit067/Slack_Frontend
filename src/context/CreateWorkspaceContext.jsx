import { createContext, useState } from "react"

const CreateWorkspaceContext = createContext();

export const CreateWorkspaceContextProvider = ({ children }) => {

    const [openCreateWorspaceModal, setOpenCreateWorkspaceModal] = useState(false);

    return(
        <CreateWorkspaceContext.Provider value={{openCreateWorspaceModal, setOpenCreateWorkspaceModal}}>
            {children}
        </CreateWorkspaceContext.Provider>
    )
} 

export default CreateWorkspaceContext;