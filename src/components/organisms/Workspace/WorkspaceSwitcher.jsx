import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";

export const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceId } = useParams();

  // Fetch current workspace
  const { isFetching, workspace } = useGetWorkspaceById(workspaceId);

  // Fetch all workspaces
  const { isFetching: isFetchingWorkspaces, workspaces } = useFetchWorkspace();

  const handleWorkspaceSelect = (id) => {
    navigate(`/workspaces/${id}`);
  };

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button
            className="size-9 relative overflow-hidden bg-[#ABABAD]
                hover:bg-[#ABABAD]/80 cursor-pointer font-semibold text-slate-80 text-xl"
            >
            {isFetching ? <Loader className="size-5 animate-spin" /> : workspace?.name.charAt(0).toUpperCase()}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem
            className="cursor-pointer flex-col justify-start capitalize"
        >
            {workspace?.name}
            <span className="text-xs text-muted-foreground">
            (Active Workspace)
        </span>
        </DropdownMenuItem>
        {isFetchingWorkspaces ? (
            <DropdownMenuItem 
                disabled
                className="cursor-pointer flex-col justify-start capitalize"
            >
                <Loader className="size-5 animate-spin" />
            </DropdownMenuItem>
            ) : workspaces?.map((ws) => { // ws -> workspace
                if(ws._id === workspaceId){
                    return null;
                }
                return (
                    <DropdownMenuItem 
                        className="cursor-pointer flex-col justify-start capitalize"
                        key={ws._id} 
                        onClick={() => handleWorkspaceSelect(ws._id)}
                    >
                        <p>{ws.name}</p>
                    </DropdownMenuItem>
                )
            }
        )}
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
