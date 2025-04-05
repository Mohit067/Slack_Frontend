import { getPaginetUrl, uploadImageToAWSPresignedUrl } from '@/apis/s3';
import { Editor } from '@/components/atoms/Editor/Editor';
import { useAuth } from '@/hooks/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWrokspace';
import { useSocket } from '@/hooks/context/useSocket';
import { useQueryClient } from '@tanstack/react-query';
 
export const ChatInput = () => {

    const {socket, currentChannel} = useSocket();
    const { auth } = useAuth();
    const {currentWorkspace} = useCurrentWorkspace();
    const queryClient = useQueryClient();

    async function hadleSubmit({ body, image}) {
        console.log(body, image);
        let fileUrl = null;
        if(image) {
            const preSingedUrl = await queryClient.fetchQuery({
                queryKey: ['getPresignedUrl'],
                queryFn: () => getPaginetUrl({ token: auth?.token }),
            });

            console.log('Presigned url ::::: ', preSingedUrl);

            const responseAws = await uploadImageToAWSPresignedUrl({
                url: preSingedUrl,
                file: image
            });
            console.log('This is response of upload image on aws :: ',responseAws);
            fileUrl = preSingedUrl.split('?')[0];
        }
        socket.emit("NewMessage", {
            channelId: currentChannel,
            body,
            image: fileUrl,
            senderId: auth?.user?._id,
            workspaceId: currentWorkspace?._id
        }, (data) => {
            console.log('Message sent', data);
        });
    }

    return (
        <div
            className="px-5 w-full"
        >
            <Editor 
                placeholder="Type a message..."
                onSubmit={hadleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
            />
        </div>
    );
};