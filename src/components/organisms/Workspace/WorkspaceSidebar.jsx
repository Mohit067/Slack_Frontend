import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton";
import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

export const WorkspaceSidebar = () => {
    return (
        <aside className="w-[70px] h-full bg-[#421645] flex flex-col gap-y-4 
            items-center pt-[10px] pb-[px]"

        >   
            <WorkspaceSwitcher />

            <SidebarButton 
                Icon={HomeIcon}
                label="Home"
            />    

            <SidebarButton 
                Icon={MessageSquareIcon}
                label="DMs"
            />   
            <SidebarButton 
                Icon={BellIcon}
                label="Notification"
            />    

            <SidebarButton 
                Icon={MoreHorizontalIcon}
                label="More"
            /> 

            <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1">
                <UserButton />    
            </div>      
        </aside>
    )
}