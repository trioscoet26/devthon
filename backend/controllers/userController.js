const User = require('../models/User');

// Get user profile with GreenCoins
exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req.auth;
    
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      // Create new user record if first time accessing
      user = await User.create({
        clerkId: userId,
        email: req.auth.user.primaryEmailAddress.emailAddress,
        name: `${req.auth.user.firstName} ${req.auth.user.lastName}`,
        greenCoins: 0,
        reportsSubmitted: 0
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user profile',
      error: error.message
    });
  }
};