import { Router } from "express";
import { getStories, createStory, updateStory, deleteStory } from "../controllers/stories.js";
const router = Router()

router.get('/', getStories)
router.post("/", createStory)
router.patch("/:id", updateStory)
router.delete("/:id", deleteStory)

export default router