import User from "../Models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")  //prevents self chatting

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("getUsersForSideBar error::", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
