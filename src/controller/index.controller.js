

module.exports.homeController = async (req, res) => {
    try {
      const users = await userModel.find();
      //   console.log(users[0]._id.toString());
      res.render("home", { users });
    } catch (error) {
      res.render("error", { error });
    }
  };

  