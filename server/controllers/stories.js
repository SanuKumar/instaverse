import Story from "../models.js/storyContent.js"
import mongoose from "mongoose"

const getStories = async (req, res) => {
  try {
    const story = await Story.find()
    res.status(200).json(story)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createStory = async (req, res) => {
  const body = req.body
  const newStory = new Story({
    ...body
  })
  try {
    await newStory.save()
    res.status(201).json(newStory)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const updateStory = async () => {
  const { id: _id } = req.params

  const story = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("This id doesn't belong to any story")
  }

  const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true })

  res.json(updatedStory)
}

export { getStories, createStory, updateStory }
