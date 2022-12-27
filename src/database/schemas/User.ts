import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // force lowercase
    },
    password: {
        type: String,
        required: true,
        select: false, // inacessível em buscas de SELECT
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

User.pre('save', async function(next) { // encriptando o password antes de salvar no mongodb
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;

    next();
})

export default mongoose.model("User", User);