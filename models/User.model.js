const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    userType: {
      type: String,
      required: [true, 'User type is required.'],
      enum: ['Awareness', 'Event'] 
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
