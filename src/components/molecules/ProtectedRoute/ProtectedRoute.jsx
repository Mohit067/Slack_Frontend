import { useAuth } from "@/hooks/context/useAuth"
import { LucideLoader2 } from "lucide-react";
import { Navigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
    const { auth } = useAuth();

    

    if(auth.isLoading) {
        return <div><LucideLoader2 className="animate-spin ml-2 w-5 h-5 text-green-700" />Loading...</div>
    }

    if(!auth.user || !auth.token){
        return <Navigate to="/auth/signin" /> 
    }

    return children
}