import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    associateId: {
        type: String
    },
    parentId: {
        type: String
    },
    type: {
        type: String
    }
})

const User = mongoose.model('user', UserSchema);
export default User;
// module.exports = User;