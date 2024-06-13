const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const characterSchema = new Schema({
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
            type: Number,
            default: 1
        },
        max: {
            type: Number,
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
    inventory: {
        type: String,
        maxlength: 500
    },
    notes: {
        type: String,
        required: false,
        maxlength: 280
    }
})