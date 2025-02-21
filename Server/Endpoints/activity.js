const UserDetails = require('../Models/User');

const ActivityFunction = async (req, res) => {
    try {
        console.log(req.userId + " " + req.body.Calories);
        const user = await UserDetails.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        user.Calories += req.body.Calories;//this is gonna tokens from the frontend
        await user.save();

        return res.status(200).json({
            msg: "Successfully updated calories",
            updatedCalories: user.Calories
        });

    } catch (error) {
        console.error("Error updating activity: ", error);
        return res.status(500).json({
            msg: "Error occurred while updating activity"
        });
    }
};

module.exports = { ActivityFunction };
