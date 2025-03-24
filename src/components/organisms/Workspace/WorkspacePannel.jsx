import { WorkspacePannelHeader } from "@/components/molecules/Workspace/WorkspacePannelHeader";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { AlertTriangle, Loader } from "lucide-react";
import { useParams } from "react-router-dom"

export const WorkspacePannel = () => {

    const { workspaceId } = useParams();
    
    const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);

    if(isFetching) {
        return (
            <div
                className="flex flex-col gap-y-2 h-full items-center justify-center text-white"
            >
                <Loader className="animate-spin size-6 text-white"/>
            </div>
        )
    }

    if(!isSuccess){
        <div
            className="flex flex-col gap-y-2 h-full items-center justify-center text-white"
        >
            <AlertTriangle className="size-6 text-white"/>
            Something went wrong
        </div>
    }

    return (
        <div className="flex flex-col h-full bg-[#5E2C5F]">
            <WorkspacePannelHeader workspace={workspace}/>
        </div>
    )
}