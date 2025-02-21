const UserDetails = require("../Models/User");

const LeaderBoardFunction = async function (req, res) {
  const id = req.userId;
  try {
    const currentUser = await UserDetails.findById(id, "UserName");

    const users = await UserDetails.find({}, "UserName Calories") // Include both UserName and Calories
      .sort({ Calories: -1 });

    // Assign ranks to users
    const rankedUsers = users.map((user, index) => ({
      UserName: user.UserName,
      Calories: user.Calories,
      Rank: index + 1,
    }));

    res.status(200).json({
      currentUser: currentUser,
      leaderboard: rankedUsers,
      Calories: rankedUsers.find(
        (user) => user.UserName === currentUser.UserName
      ).Calories,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error });
  }
};

module.exports = { LeaderBoardFunction };
