import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom"

export const WorkspaceSwitcher = () => {

    const navigate = useNavigate();

    const { workspaceId } = useParams();

    const { isFetching, workspace} = useGetWorkspaceById(workspaceId);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    className="size-9 relative overflow-hiddne bg-[#ABABAD]
                    hover:bg-[#ABABAD]/80 cursor-pointer font-semibold text-slate-80 text-xl"
                >
                    {isFetching ? (<Loader className="size-5 animate-spin"/>) : workspace?.name.charAt(0).toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}