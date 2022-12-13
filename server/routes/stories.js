import { Router } from "express";
import { getStories, createStory, updateStory } from "../controllers/stories.js";
const router = Router()

router.get('/', getStories)
router.post("/", createStory)
router.patch("/:id", updateStory)

export default router