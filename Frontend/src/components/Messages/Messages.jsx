import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../Skeletons/messageSkeleton";
import Message from "./Message";
import useListenMessages from "../../Hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log(messages);
  useListenMessages();
  const lastMessageRef = useRef(null);
  useEffect(() => {
	setTimeout(() => {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
	},100)
	
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Start a conversation.</p>
      )}
    </div>
  );
};
export default Messages;
