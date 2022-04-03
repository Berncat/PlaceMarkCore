import Mongoose from "mongoose";

const { Schema } = Mongoose;

const themeSchema = new Schema({
  name: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Theme = Mongoose.model("Theme", themeSchema);
