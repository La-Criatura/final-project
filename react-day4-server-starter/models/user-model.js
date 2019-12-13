const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  picture: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png'},
  skills: [{type: Schema.Types.ObjectId, ref:"Skill"}],
  email: { type: String, default: 'email@email.com'},
  credit: { type: Number, default: 1},
  city: { type: String, default: 'City'},
  counter: Number
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;