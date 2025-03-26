import { Button } from "@/components/ui/button";
import { useJoinWorkspace } from "@/hooks/apis/workspaces/useJoinWorkspace";
import { Link, useNavigate, useParams } from "react-router-dom";
import VerificationInput from "react-verification-input";
import { toast } from "sonner";

export const JoinPage = () => {
    const { workspaceId } = useParams();

    const {joinWorkspaceMutation} = useJoinWorkspace(workspaceId);
    const navigate = useNavigate();
    async function handleAddMemberToWorkspace(joinCode) {
        console.log('Adding member to workspace', joinCode);
        try {
            await joinWorkspaceMutation(joinCode);
            console.log('Member added to workspace successfully');
            toast('You have been added to workspace successfully');
            navigate(`/workspaces/${workspaceId}`)
        } catch (error) {
            console.log('Error adding member to workspace', error);
            toast('You have been not added to workspace');
        }
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#5E2C5F] to-[#481349]">
            <div className="p-8 bg-white rounded-2xl shadow-xl w-96 text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    Join Workspace
                </h1>
                <p className="text-gray-600 mb-6 text-lg">
                    Enter the code you received to join the workspace
                </p>
                <VerificationInput 
                    onComplete={handleAddMemberToWorkspace}
                    length={6}
                    classNames={{
                        container: "flex justify-center gap-3",
                        character: "w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-2xl font-semibold bg-gray-100 focus:outline-none focus:border-purple-500 transition-all duration-300",
                        characterInactive: "bg-gray-200",
                        characterSelected: "border-pink-500 shadow-lg scale-110"
                    }}
                    autoFocus
                />
                <Button 
                    className="mt-6 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md
                    hover:bg-purple-700 transition-all duration-300 cursor-pointer"
                    size="lg"
                    variant='outline'  
                >
                    <Link to={`workspaces/${workspaceId}`}>
                        Back to the workspace
                    </Link>
                </Button>
            </div>
        </div>
    );
};