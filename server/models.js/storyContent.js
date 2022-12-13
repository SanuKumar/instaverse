import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  caption: { type: String, required: true },
  username: { type: String, required: true },
  userId: { type: String, required: false },
  image: { type: String, required: true },
  tags: String,
  likes: { type: Number, default: 0 },
  postData: { type: Date, default: new Date() }
})

export default mongoose.model("Story", storySchema)