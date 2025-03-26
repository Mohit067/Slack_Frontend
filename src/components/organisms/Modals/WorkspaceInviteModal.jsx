import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";
import { CopyIcon, RefreshCwIcon } from "lucide-react"
import { toast } from "sonner";

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId }) => {

    const {resetJoinCodeMutation} = useResetJoinCode(workspaceId);

    async function handleCopy () {
        const inviteLink = `${window.location.origin}/join/${joinCode}`;
        await navigator.clipboard.writeText(inviteLink)

        toast('Link copied to clicpboard',{
            variant: "destructive",

        });
    }

    async function handleResetCode() {
        try {
            await resetJoinCodeMutation();
            toast('Join Code reset successfully',{
                variant: "destructive",

            });
        } catch (error) {
            console.log('Error reseting joincode', error);
            toast('Error reseting joincode',{
                variant: "destructive",

            });
        }
    }
    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite people to {workspaceName}
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Use the code shown below to invite peopel to your workspace
                </DialogDescription>

                <div  
                    className="flex flex-col items-center justify-center p-10 gap-y-4"
                >
                    <p className="font-bold text-4xl uppercase">
                        {joinCode}
                    </p>
                    <Button size="sm" variant='ghost' onClick={handleCopy}>
                        Copy Link
                        <CopyIcon className="size-sm ml-2"/>
                    </Button>
                </div>
                <div  
                    className="flex items-center justify-center w-full"
                >
                    <Button variant='outline' onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCwIcon className="size-sm ml-2"/>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}