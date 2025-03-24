import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth"
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { LogOutIcon, PencilIcon, SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const UserButton = () => {
    const navegate = useNavigate();
    const { auth, logout } = useAuth();

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();  

    function handleFunction() {
        console.log("type of setOpen", typeof setOpenCreateWorkspaceModal);
        setOpenCreateWorkspaceModal(true);
    }

    async function  handleLogout() {
        await logout();
        toast("Successfully signed out", {
            variant: "destructive",
            description: "You will be redirected to the signin page in a few seconds.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
        });
        navegate('/auth/signin');
    }

   
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar 
                    className="size-10 border-2 border-gray-300 shadow-md hover:opacity-50 
                    transition cursor-pointer">
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem 
                    onClick={handleFunction}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    ><PencilIcon />Create Workspace</DropdownMenuItem>
                <DropdownMenuItem 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    ><SettingsIcon />Settings</DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                ><LogOutIcon />Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}