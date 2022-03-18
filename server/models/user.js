const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bycrypt = require("bcryptjs");

// Define the model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// On Save Hook, encrypt password
userSchema.pre("save", function (next) {
    const user = this;
  
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
  
        user.password = hash;
        next();
      });
    });
  });


// method
userSchema.methods.comparePassword = function(candidatePassword, callback){
    bycrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return callback(err);

        callback(null, isMatch);
    });
};

// Create the model class
const ModelClass = mongoose.model("user", userSchema);

// Export
module.exports = ModelClass;