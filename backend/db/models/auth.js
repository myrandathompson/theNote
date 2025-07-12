import mongoose, { Schema } from 'mongoose';


// const { Schema } = mongoose;


const userSchema = new Schema ({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required: true},
    about:{type:String, default: ''},
    tags:{type:Array, default: []},
    joinedOn:{type:Date, default: Date.now},
})


export default mongoose.model('User', userSchema);