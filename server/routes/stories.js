import { Router } from "express";
import { getStories, createStory } from "../controllers/stories.js";
const router = Router()

router.get('/', getStories)
router.post("/", createStory)

export default router