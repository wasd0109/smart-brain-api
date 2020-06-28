const handleProfileGet = (db) => (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user);
      } else {
        res.status(400).json("Error getting user");
      }
    });
  //   if (!found) {
  //     res.status(404).json("not found");
  //   }
};

module.exports = {
  handleProfileGet,
};
