import toast from "react-hot-toast";
import useGetConversations from "../../Hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long.");
      return;
    }
    const conversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("Conversation not found");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white border-black border-2"
        >
          <IoSearchOutline size={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
