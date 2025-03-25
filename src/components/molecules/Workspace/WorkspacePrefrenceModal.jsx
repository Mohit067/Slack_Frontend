import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWorkspacePrefrenceModalContext } from "@/hooks/context/useWorkspacePrefrenceModalContext";
import { TrashIcon } from "lucide-react";

export const WorkspacePrefrenceModal = () => {

    const { initalValue, openPrefrences ,setOpenPrefrences } = useWorkspacePrefrenceModalContext();

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
                    </div>
                    <Button className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md 
                    text-sm font-medium transition-all duration-200 hover:bg-red-600 active:bg-red-700">
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