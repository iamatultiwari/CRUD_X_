import  User from "../models/user.model.js"

// Request comes 
//      ↓
// Get data from req.body
//      ↓
// Validate data
//      ↓
// Check if user already exists
//      ↓
// Create user
//      ↓
// Return success response
//      ↓
// Handle errors if any

export const createUser = async(req,res) => {
    try{
        const {username,useremail} = req.body;

        if(!username || !useremail){
            return res.status(404).json({
                success:false,
                message: "all fields are required ",
            });


            const existingUser = await User.fineOne({
                username ,
            })
            if(existingUser){
                return res.status(409).json({
                    success:true,
                    message: "user already present"
                })

                const user = await User.create({
                    username,
                    useremail,
                });

                return res.status(201).json({
                    success: false,
                    message: error.message,
                });
            }
        }

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}