const UserDetails = require('../Models/User');

const LeaderBoardFunction = async function (req, res) {
    const id = req.userId;
    try {
        const currentUser = await UserDetails.findById(id, 'UserName');
        
        const users = await UserDetails.find({}, 'UserName Calories') // Include both UserName and Calories
            .sort({ Calories: -1 });

        res.status(200).json({
            currentUser: currentUser,
            leaderboard: users,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
};

module.exports = { LeaderBoardFunction };
