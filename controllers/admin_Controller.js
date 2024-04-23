module.exports.adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
      return res.status(200).json({
        message: "Login Sucessffully",
      });
    }
    return res.status(401).json({
      message: "Invalid Username and Password",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
