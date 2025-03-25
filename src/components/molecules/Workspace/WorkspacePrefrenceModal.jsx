import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace";
import { useWorkspacePrefrenceModal } from "@/hooks/context/useWorkspacePrefrenceModal";
import { useConfirm } from "@/hooks/useConfirm";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const WorkspacePrefrenceModal = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [workspaceId, setWorkspaceId] = useState(null);
    const [editOpen, setEditOpen] = useState(false);

    const { initalValue, openPrefrences ,setOpenPrefrences, workspace } = useWorkspacePrefrenceModal();
    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);   
    const { isPending, updateWorkspaceMutation } = useUpdateWorkspace(workspaceId);
    const { Confirmation, ConfirmDialog} = useConfirm({ title: "Do you want to delete the workspace", message: "This action cannot be undone"});
    const { Confirmation: UpdateConfirmation, ConfirmDialog: UpdateDialog} = useConfirm({ title: "Do you want to update the workspace", message: "This action cannot be undone"})

    const [renameValue, setRenameValue] = useState(workspace?.name);

    useEffect(() => {
        setWorkspaceId(workspace?._id);
        setRenameValue(workspace?.name);
    }, [workspace]);

    async function handleDelete() {
        try {
            const ok = await Confirmation();
            console.log("Confirmation recieved");
            if(!ok){
                return;
            }
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPrefrences(false);
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

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            const ok = await UpdateConfirmation();
            console.log("Confirmation recieved");
            if(!ok){
                return;
            }
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
            setOpenPrefrences(false);
            toast("Successfully Update workspace", {
                variant: "destructive",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
            });
        } catch (error) {
            console.log("Error in Update workspace", error);
            toast("Error Update workspace", {
                variant: "destructive",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
            });
        }
    }

    return (
        <>
            <ConfirmDialog />
            <UpdateDialog />
            <Dialog open={openPrefrences} onOpenChange={setOpenPrefrences}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {initalValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger>
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
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Rename Workspace
                                </DialogTitle>
                            </DialogHeader>

                            <form
                                className="space-y-4 "
                                onSubmit={handleFormSubmit}
                            >
                                <Input 
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    required
                                    autoFocus
                                    disabled={isPending}
                                    minLength={3}
                                    maxLength={50}
                                    placeholder='Workspace Name e.g. Design Team'
                                />
                            

                                <DialogFooter>
                                    <DialogClose>
                                        <Button
                                            variant="outline"
                                            disabled={isPending}
                                        >
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button 
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
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
        </>
    )
}