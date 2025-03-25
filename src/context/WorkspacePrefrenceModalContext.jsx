import { createContext, useState }  from "react";


const WorkspacePrefrenceModalContext = createContext();

export const WorkspacePrefrenceModalContextProvider = ({ children }) => {

    const [openPrefrences, setOpenPrefrences] = useState(false);
    const [initalValue, setInitialValue] = useState('Edit Workspace');
    const [workspace, setWorkspace] = useState(null);
    return (
        <WorkspacePrefrenceModalContext.Provider value={{openPrefrences, setOpenPrefrences, initalValue, setInitialValue, workspace, setWorkspace}}>
            {children}
        </WorkspacePrefrenceModalContext.Provider>
    )
}

export default WorkspacePrefrenceModalContext;