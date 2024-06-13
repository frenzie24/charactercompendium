const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const partySchema = new Schema({
    name: String,
    characters: [{type: Schema.Types.ObjectID, ref: 'Character'}]
})

const Party = model('Party', partySchema);

module.exports = Party;