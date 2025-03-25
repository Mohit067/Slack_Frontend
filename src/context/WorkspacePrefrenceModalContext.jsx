import { createContext, useState }  from "react";


const WorkspacePrefrenceModalContext = createContext();

export const WorkspacePrefrenceModalContextProvider = ({ children }) => {

    const [openPrefrences, setOpenPrefrences] = useState(false);
    const [initalValue, setInitialValue] = useState('Edit Workspace');
    return (
        <WorkspacePrefrenceModalContext.Provider value={{openPrefrences, setOpenPrefrences, initalValue, setInitialValue}}>
            {children}
        </WorkspacePrefrenceModalContext.Provider>
    )
}

export default WorkspacePrefrenceModalContext;