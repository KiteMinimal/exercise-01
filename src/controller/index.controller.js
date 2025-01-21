const userModel = require("../config/indexSchema");
const { ObjectId } = require("mongodb");

module.exports.formController = (req, res) => {
  res.render("index");
};

module.exports.showformController = (req, res) => {
  res.render("index");
};

module.exports.userCreateController = async (req, res) => {
  const { username, profileImage, email, bio, gender, age } = req.body;
  const user = await userModel.create({
    username: username,
    profileImage: profileImage,
    email: email,
    bio: bio,
    gender: gender,
    age: age,
  });
  console.log(req.body);
  res.redirect("/");
};

module.exports.homeController = async (req, res) => {
  try {
    const users = await userModel.find();
    //   console.log(users[0]._id.toString());
    res.render("home", { users });
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.eachUserController = async (req, res) => {
  try {
    const userEmail = req.params.useremail;
    const user = await userModel.findOne({ email: userEmail });
    res.render("usersOne", { user });
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.deleteuserController = async (req, res) => {
  try {
    const d = req.params.dbId;
    const dbId = new ObjectId(d); // Convert string to ObjectId

    await userModel.deleteOne({ _id: dbId });
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).render("error", { error });
  }
};
