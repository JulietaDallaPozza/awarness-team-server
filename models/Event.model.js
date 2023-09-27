const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: [true, 'Event name is required.'],
      trim: true,
    },
    eventDate: {
      type: Date,
      required: [true, 'Event date is required.'],
    },
    eventTime: {
      type: String,
      required: [true, 'Event time is required.'],
    },
    eventLocation: {
      type: String,
      required: [true, 'Event location is required.'],
      trim: true,
    },
    eventDescription: {
      type: String,
      required: [true, 'Event description is required.'],
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: [true, 'Event organizer is required.'],
    },
    awarenessTeam: [{
      type: Schema.Types.ObjectId,
      ref: 'AwarenessTeam', 
    }],
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
