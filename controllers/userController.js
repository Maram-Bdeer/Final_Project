const User = require("../models/User");
const Post = require("../models/User");


exports.getAllUsers= async (req, res, next) => {
  try {
    const [users, _] = await users.findAll(); 
    return  [users, _]
    res.status(200).json({ count: users.length, users });
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        name:req.body.user_name,
        email: req.body.email,
        password: hash,
        type : req.body.type
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
  await User.db.createNewUser(params)
};

exports.getUserById = async (req, res, next) => {
  try {
    let userId = req.params.user_id;

    let [user, _] = await Post.findById(userId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    next(error);
  }
};
