import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected=true
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? <NoChatSelected /> : (
        <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-900 font-bold">John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <p>Welcome 👋🏻 John Doe</p>
      <p>Click on a conversation to start messaging</p>
      <TiMessages className="text-4xl ms:6xl text-center"/>
      </div>
    </div>
  );
};
export default MessageContainer;
