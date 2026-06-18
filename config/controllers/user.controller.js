import  User from "../models/user.model.js"

// Get data from req.body
// Validate input fields
// Check if user already exists
// Create new user
// Return success response
// Handle errors

export const createUser = async (req, res) => {
  try {

    // Step 1: Get data from body
    const { username, useremail } = req.body;

    // Step 2: Validate fields
    if (!username || !useremail) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Step 3: Check existing user
    const existingUser = await User.findOne({
      useremail
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    // Step 4: Create user
    const user = await User.create({
      username,
      useremail
    });

    // Step 5: Return response
    return res.status(201).json({
      message: "User created successfully",
      data: user
    });

  } catch (error) {

    // Step 6: Handle errors
    return res.status(500).json({
      message: error.message
    });
  }
};


// Fetch all users from database
// Return users
// Handle errors

export const getAllUsers = async (req, res) => {
  try {

    // Step 1: Fetch users
    const users = await User.find();

    // Step 2: Return users
    return res.status(200).json(users);

  } catch (error) {

    // Step 3: Handle errors
    return res.status(500).json({
      message: error.message
    });
  }
};


// Get id from params
// Find user
// Check if user exists
// Return user
// Handle errors


export const getUserById = async (req, res) => {
  try {

    // Step 1: Get id
    const { id } = req.params;

    // Step 2: Find user
    const user = await User.findById(id);

    // Step 3: Check existence
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Step 4: Return user
    return res.status(200).json(user);

  } catch (error) {

    // Step 5: Handle errors
    return res.status(500).json({
      message: error.message
    });
  }
};

// Get id from params
// Check if user exists
// Update user
// Return updated user
// Handle errors


export const updateUser = async (req, res) => {
  try {

    // Step 1: Get id
    const { id } = req.params;

    // Step 2: Check user existence
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Step 3: Update user
    const updatedUser =
      await User.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    // Step 4: Return updated user
    return res.status(200).json(updatedUser);

  } catch (error) {

    // Step 5: Handle errors
    return res.status(500).json({
      message: error.message
    });
  }
};


// Get id from params
// Check if user exists
// Delete user
// Return success response
// Handle errors


export const deleteUser = async (req, res) => {
  try {

    // Step 1: Get id
    const { id } = req.params;

    // Step 2: Check user existence
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Step 3: Delete user
    await User.findByIdAndDelete(id);

    // Step 4: Return response
    return res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {

    // Step 5: Handle errors
    return res.status(500).json({
      message: error.message
    });
  }
};