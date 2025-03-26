import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { useState } from "react";

export const CreateChannelModal = () => {
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [channelName, setChannelName] = useState('');

    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    }   

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a channel
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        required
                        onChange={(e) => e.target.value}
                        minLength={3}
                        placeholder='Channel name e.g. team-announcement'                    
                    />

                    <div>
                        <Button className="flex justify-end mt-4">
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}