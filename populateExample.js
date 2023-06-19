const User = require('./models/user');

const populateExample = async () => {
  try {
    const user = await User.findOne().populate('orders');

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

populateExample();
