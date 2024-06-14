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
        current: {
            type: Schema.Types.BigInt,
            default: 1
        },
        max: {
            type: Schema.Types.BigInt,
            default: 1
        }
    },
    defense: {
        type: String,
        required: false
    },
    baseStat: [{
        name: {
        type: String,
        required: true
        },
        value: {
            type: Number,
            default: 0
        }
    }
    ],
    skill: [{
        name: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            default: 0,
            required: false
        }
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