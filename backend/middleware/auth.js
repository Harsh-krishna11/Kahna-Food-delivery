import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  console.log(token);

  if (!token) {
    return res.json({ success: false, message: "Not Authorize Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = tokenDecode.id;
    console.log(tokenDecode.id);

    next(); // Pass control to the next middleware or route
  } catch (error) {
    console.error("JWT Verification Error:", error); // Log the actual error
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;
