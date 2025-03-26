import { SideBarItem } from "@/components/atoms/SideBarItem/SideBarItem";
import { WorkspacePannelHeader } from "@/components/molecules/Workspace/WorkspacePannelHeader";
import { WorkspacePannelSection } from "@/components/molecules/Workspace/WorkspacePannelSection";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { AlertTriangle, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from "lucide-react";
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
            <div className="flex flex-col px-2 ">
                <SideBarItem 
                    label="Threads" 
                    icon={MessageSquareTextIcon}
                    id="threads"
                    variant='active'
                />
                <SideBarItem 
                    label="Drafts & sends" 
                    icon={SendHorizonalIcon}
                    id="drafts"
                    variant='default'
                />
            </div>

            <WorkspacePannelSection
                label={'Channels'}
                
            >
                {workspace?.channels?.map((channel) => {
                    return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />
                })}
            </WorkspacePannelSection>
        </div>
    )
}