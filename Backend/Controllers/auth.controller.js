import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../Utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } =
       req.body;

    // console.log(req.body);

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.log("SignupError::", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { username, password } = await req.body;
//     const user = await User.findOne({ username });
//     const isPasswordMatch = await bcryptjs.compare(password, user?.password||"");

//     if(!user || !isPasswordMatch){
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     generateTokenAndSetCookie(user._id,res);

//     res.status(200).json({
//       _id: user._id,
//       fullName: user.fullName,
//       username: user.username,
//       profilePic: user.profilePic,
//     })

//   } catch (error) {
//     console.log("LoginError::", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate request body
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    // Find user in the database
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Ensure password exists in the user object
    if (!user.password) {
      console.error("LoginError:: Password is missing in the database for this user.");
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Compare passwords
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate token and set cookie
    generateTokenAndSetCookie(user._id, res);

    // Return user data
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("LoginError::", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("LogoutError::", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

