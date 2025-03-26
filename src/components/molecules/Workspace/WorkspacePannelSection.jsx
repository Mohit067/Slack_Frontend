import { Button } from "@/components/ui/button"
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { PlusIcon } from "lucide-react";
import { useState } from "react"
import { FaCaretDown } from "react-icons/fa";

export const WorkspacePannelSection = ({ children, label}) => {

    const [open, setOpen] = useState(true);
    const {setOpenCreateChannelModal} = useCreateChannelModal();

        
    return (
        <div className="flex flex-col mt-3 px-2">
            <div className="flex items-center px-3.5 group">
                <Button
                    onClick={() => setOpen(!open)}
                    variant="transparent"
                    className="p-0.5 text-sm size-6 text-[#f9edffcc]"
                >
                    {open ? <FaCaretDown className="size-4" /> : <FaCaretDown className="size-4 transform rotate-270" />}
                </Button>
                <Button
                    variant='transparent'
                    size='sm'
                    className='group px-0.15 text-sm text-[#f9edffcc] 
                    h-[30px] justify-start items-center overflow-hidden'
                >
                    <span>{label}</span>
                </Button>

                {open && (
                    <Button
                        variant="transparent"
                        size='sm'
                        className="opacity-0 group-hover:opacity-100  transition opacity ml-auto p-0.5 text-sm size-6 text-[#f9edffcc] "
                        onClick={() => setOpenCreateChannelModal(true)}
                    >
                        <PlusIcon className="size-4 "/>
                    </Button>
                )}
            </div>
            {open && children}
        </div>
    )
}