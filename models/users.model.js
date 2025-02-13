const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {
      type: String,
      required:true,
      unique:true,
      trim:true,
      minlength:6
  }

}, {
    timestamps: true
}
)

const User = mongoose.model('User',userSchema);

module.exports = User