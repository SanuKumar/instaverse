import mongoose from "mongoose"
import Story from "../models.js/storyContent.js"

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
  const newStory = newStory({
    ...body
  })
  try {
    await newStory.save()
    res.status(201).json(newStory)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export { getStories, createStory }