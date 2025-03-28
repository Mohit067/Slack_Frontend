import { Button } from "@/components/ui/button";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWrokspace";
import { InfoIcon, LucideLoader2, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const WorkspaceNavbar = () => {

    const { workspaceId } = useParams();

    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isFetching, workspace, error, isSuccess } = useGetWorkspaceById(workspaceId);
    
    const {setCurrentWorkspace} = useCurrentWorkspace();

    useEffect(() => {


        if(!isFetching && !isSuccess && error) {
            console.log('Error fetching workspace', error.status);
            if(error.status === 403) {
                logout();
                navigate('/auth/signin');
            }
        }

        if(workspace){
            setCurrentWorkspace(workspace);
        }
    }, [workspace, setCurrentWorkspace, isSuccess, error, isFetching]);
    

    if (isFetching) {
        return (
            <div className="flex items-center justify-center h-10 p-1.5 bg-[#421645]">
                <LucideLoader2 className="animate-spin ml-2 w-5 h-5 text-green-700" />
            </div>
        );
    }
    
   
    return (
        <nav
            className="flex items-center justify-center h-10 p-1.5 bg-[#421645]"
        >   
            <div className="flex-1"/>
            <div>
                <Button
                    size='sm'
                    className="bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2"
                > 
                    <SearchIcon className="size-4 text-white mr-1"/>
                    <span className="text-white text-xs">
                        Search {workspace?.name || 'Workspace'}
                    </span>
                </Button>
            </div>
            <div className="ml-auto flex-1 flex items-center justify-end">
                <Button
                    variant="transparent"
                    size="iconSm"
                >
                    <InfoIcon className="size-4 text-white" />
                </Button>
            </div>
        </nav>
    )
}