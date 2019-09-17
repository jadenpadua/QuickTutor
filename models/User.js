const mongooe = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    },
    date: {
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);