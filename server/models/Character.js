const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// types for majority were reverted to string, may later expand for more utility in predefinition. 
const characterSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    characterName: {
        type: String,
        required: true
    },
    characterClass: {
        type: String,
        required: true
    },
    health: {
        type: String
    },
    defense: {
        type: String,
        required: false
    },
    baseStat: [{
        type: String
    }],
    skill: [{
        type: String
    }],
    inventory: [{
        type: String,
        maxlength: 1000
    }],
    notes: [{
        type: String,
        required: false,
        maxlength: 280
    }]
})

const Character = model('Character', characterSchema);

module.exports = Character;