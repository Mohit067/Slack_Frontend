import { WorkspaceInviteModal } from "@/components/organisms/Modals/WorkspaceInviteModal"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/context/useAuth"
import { useWorkspacePrefrenceModal } from "@/hooks/context/useWorkspacePrefrenceModal"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import {  ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react"
import { useEffect, useState } from "react"

export const WorkspacePannelHeader = ({ workspace }) => {

    console.log('workspace is', workspace);

    const [openInviteModal, setOpenInviteModal] = useState(false);

    const { setWorkspace, setOpenPrefrences, setInitialValue } = useWorkspacePrefrenceModal();

    const workspaceMembers = workspace?.members;

    const { auth } = useAuth();
    console.log(auth);

    const isLoggedInUserAnAdminOfThisWorkspace = workspaceMembers?.find(member => member.memberId._id === auth?.user?._id && member.role === 'admin');

    useEffect(() => {
        setWorkspace(workspace);
    }, [])

    return ( 
        <>
            <WorkspaceInviteModal 
                openInviteModal={openInviteModal}
                setOpenInviteModal={setOpenInviteModal}
                workspaceName={workspace?.name}
                joinCode={workspace?.joinCode}
                workspaceId={workspace?._id}
            />
            <div
                className="flex items-center justify-between px-4 h-[50px] gap-0.5"
            >
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button 
                            variant="transparent"
                            className="cursor-pointer font-semibold text-lg w-auto p-1.5 overflow-hidden" 
                        >
                            <span className="truncate">
                                {workspace?.name}
                            </span>
                            <ChevronDownIcon className="size-5 ml-1"/>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent side="bottom" align="start" className="w-64">
                        <DropdownMenuItem>
                            <div
                                className="size-9 relative overflow-hidden text-white font-semibold text-xl 
                                rounded-md flex items-center justify-center mr-2  bg-[#616061]"
                            >
                                {workspace?.name.charAt(0).toUpperCase()}
                                
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="font-semibold">
                                    {workspace.name}
                                </p>
                                <p className="text-xs text-muted-forground">
                                    Active Workspace
                                </p>
                            </div>
                        </DropdownMenuItem>

                        {isLoggedInUserAnAdminOfThisWorkspace && (
                            <>
                                <DropdownMenuItem 
                                    className="cursor-pointer py-2"
                                    onClick={() => {
                                        setInitialValue(workspace?.name);
                                        setOpenPrefrences(true);
                                    }}
                                >
                                    prefrence
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                    className="cursor-pointer py-2"
                                    onClick={() => setOpenInviteModal(true)}
                                >
                                    Invite peopel to {workspace.name}
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center gap-0.5">
                    <Button
                        variant="transparent"
                        size="iconSm"
                    >
                        <ListFilterIcon className="size-5"/>
                    </Button>
                    <Button
                        variant="transparent"
                        size="iconSm"
                    >
                        <SquarePenIcon className="size-5"/>
                    </Button>
                </div>
            </div>
        </>
    )
}