import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react"

export const useConfirm = ({
    title,
    message
}) => {
    const [promise, setPromise] = useState(null);

    async function Confirmation() {
        return new Promise((resolver) => {
            setPromise({ resolver });
        })
    }

    const hadleClose = () => {
        setPromise(null);
    }

    const hadleConfirm = () => {
        promise?.resolver(true);
        hadleClose();
    }

    const ConfirmDialog = () => {
        return (
            <Dialog open={promise !== null} onOpenChange={hadleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            {message}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button
                            onClick={hadleClose}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button 
                            onClick={hadleConfirm}
                            
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return { ConfirmDialog, Confirmation };

}