const User = require('./models/user');

const aggregateLookupExample = async () => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: 'orders',
          localField: '_id',
          foreignField: 'userId',
          as: 'orders',
        },
      },
    ]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

aggregateLookupExample();
