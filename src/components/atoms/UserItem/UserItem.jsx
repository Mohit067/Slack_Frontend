import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWrokspace"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Link } from "react-router-dom"

const userItemVariants = cva(
    'flex items-center gap-2 justify-start font-normal h-8 px-4 text-sm rounded-md', {
      variants: {
        variant: {
          default: 'text-[#f9edffcc] hover:bg-[#6a2c70]/50 transition-colors',
          active: 'text-[#481350] bg-white/90 hover:bg-white/80'
        }
      }
    }
  );
  

export const UserItem = ({
    id,
    label = 'Member',
    image,
    variant = 'default'
}) => {

    const { workspace } = useCurrentWorkspace();

    return (
        <Button
            className={cn(userItemVariants({variant}))}
            variant='transparent'
            size='sm'
            asChild

        >
            <Link to={`/workspace/${workspace?._id}/members/${id}`}>
                <Avatar>
                    <AvatarImage src={image} className='rounded-md'/>
                    <AvatarFallback className='rounded-md bg-sky-500 text-white '>
                        {label.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate"> 
                    {label}
                </span>
            </Link>
        </Button>
    )
}