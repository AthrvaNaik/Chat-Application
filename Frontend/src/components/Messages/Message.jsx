/* eslint-disable react/prop-types */
import { extractTime } from "../../utils/extractTime";
import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser}= useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;

  const messageClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubblebgc = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${messageClass}`}>
        <div className="chat-image avatar">
            <div className=" w-10 rounded-full">
                <img src={profilePic} alt="Avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubblebgc} ${shakeClass} pb-2`}>{message.message}</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{formattedTime}</div>
    </div>
  )
}

export default Message