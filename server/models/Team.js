const mongoose = require('mongoose');

// Define the schema for a team
const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    captain: {
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        freeFireId: { type: String, required: true }
    },
    players: [
        {
            name: { type: String, required: true },
            phoneNumber: { type: String, required: true },
            freeFireId: { type: String, required: true }
        }
    ],
    paymentStatus: {
        type: Boolean,
        default: false
    },
    prizeAmount: {
        type: Number,
        default: 0
    }
});

// Create the model
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
