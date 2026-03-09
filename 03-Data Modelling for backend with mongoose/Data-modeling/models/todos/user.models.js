import mongoose from "mongoose"; // import the mongoose library.

const userSchema = new mongoose.Schema(
    {
  username: String, // first option. 

  user: {          // Second option.
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  // you can also add validation to the schema like this.
  // and you can add the multiple properties to the schema like this.

  email: String, // first option.

  Useremail: { 
   
    type: String,
    required: true,
    unique: true,
    lowercase: true,

 // second option for doing the same thing but with more properties.

  },

  password:{
    type: String,
    required: [true, "password is required"],


  },
  isActive: Boolean,
} , { timestamps: true } // this will automatically add the createdAt and updatedAt fields to the schema.
);

// create a new schema for the ueser.

export const User = mongoose.model("User", userSchema);

// create a new model for the user and export it.

// in the database the "User" will be show like this users. because mongoose will automatically convert the first letter of the model name to lowercase and add an "s" at the end of it.
