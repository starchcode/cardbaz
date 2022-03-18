const mongoose = require('mongoose');
before(done => {
    // console.log('NODE_ENV', process.env.NODE_ENV);
    mongoose.connect('mongodb://localhost/moneyguy_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', err);
        });
});


beforeEach(async () => {
  // console.log(mongoose.connection.collections);
    const { users } = mongoose.connection.collections;
   
    try {
      await users.drop();
    } catch(e) {
      console.log(e);
    }
  });

