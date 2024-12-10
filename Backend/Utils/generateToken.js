import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, { httpOnly: true, secure: true,sameSite:"strict", maxAge: 3600000 });
};

export default generateTokenAndSetCookie;