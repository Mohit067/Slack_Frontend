import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useWorkspacePrefrenceModal } from "@/hooks/context/useWorkspacePrefrenceModal";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const WorkspacePrefrenceModal = () => {

    const { initalValue, openPrefrences ,setOpenPrefrences, workspace } = useWorkspacePrefrenceModal();

    const [workspaceId, setWorkspaceId] = useState(null);
    console.log("workspaceId::::", workspaceId);

    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);   

    useEffect(() => {
        setWorkspaceId(workspace?._id);
    }, [workspace]);

    async function handleDelete() {
        try {
            await deleteWorkspaceMutation();
            console.log("deleted");
            toast("Successfully delete workspace", {
                variant: "destructive",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
            });
        } catch (error) {
            console.log("Error deleting workspace", error);
            toast("Error deleting workspace", {
                variant: "destructive",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
            });
        }
    }

    return (
        <Dialog open={openPrefrences} onOpenChange={setOpenPrefrences}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {initalValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div className="px-5 py-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50  border-1">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold size-sm">
                                Workspace name
                            </p>
                            <p className="font-semibold size-sm hover:underline">
                                Edit
                            </p>

                        </div>
                        <p className="text-sm">
                            {initalValue}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md 
                        text-sm font-medium transition-all duration-200 hover:bg-red-600 active:bg-red-700"
                        onClick={handleDelete}
                    >
                        <TrashIcon className="size-5"/>
                        <p>
                            Delete Workspace
                        </p>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}