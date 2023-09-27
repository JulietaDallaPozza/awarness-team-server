const { Schema, model } = require("mongoose");

const awarenessTeamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: [true, 'Team name is required.'],
      trim: true,
    },
    teamDescription: {
      type: String,
      required: [true, 'Team description is required.'],
    },
    teamLocation: {
      type: String,
      required: [true, 'Team location is required.'],
      trim: true,
    },
    teamMembers: [{
      type: Schema.Types.ObjectId,
      ref: 'User', 
    }],
    
  },
  {
    timestamps: true,
  }
);


const AwarenessTeam = model("AwarenessTeam", awarenessTeamSchema);

module.exports = AwarenessTeam;
