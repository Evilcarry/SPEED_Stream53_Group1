const User = require('../models/User')
const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find().lean()
    if (!users?.length){
        return res.status(400).json({ message: 'No user found'})
    }
    res.json(users)
})

const createNewUser = asyncHandler(async(req, res) => {
    const { } = req.body
    
    //confirming data
    if (!username || !password){
        return res.status(400).json({ message: 'All fields are required'})
    }
    
    // Check for duplicates
    const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate user'})
    }

    const userObject = {username, password }

    // create and store new user
    const user = await user.create(userObject)

    if (user) {
        res.status(201).json({ message: `New user created with the username: ${username}`})
    }else{
        res.status(400).json({ message: 'invalid user data received'})
    }
})

const updateUser = asyncHandler(async(req, res) => {
    const {username, password } = req.body

    //confirm data
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    const user = await User.findById(username).exec()

    //check for no username found
    if (!user) {
        return res.status(400).json({ message: 'No user found'}) 
    }

    //check for duplicate 
    const duplicate = await User.findOne({username}).lean().exec()
    // Allow updates to the original user
    if (duplicate && duplicate?._username.toString() !== username){
        return res.status(409).json({ message: 'Duplicate User'})
    }

    user.username = username
    user.password = password

    const updatedUser = await user.save()

    res.json({ message: `updated user with the username: ${username}`})
})

const deleteUser = asyncHandler(async(req, res) => {
    const { username } = req.body

    if (!username){
        return res.status(400).json({message: 'username required'})
    }

    const user = await User.findOne({ username }).exec()

    if (!user){
        return res.status(400).json({message: 'user not found'})
    }

    const result = await user.deleteOne()

    const reply = `User with username ${result.username} deleted`

    res.json(reply)
})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}