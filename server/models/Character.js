const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const characterSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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