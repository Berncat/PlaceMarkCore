import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placeSchema = new Schema({
  name: String,
  lon: Number,
  lat: Number,
  desc: String,
  themeId: {
    type: Schema.Types.ObjectId,
    ref: "Theme",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Place = Mongoose.model("Place", placeSchema);
