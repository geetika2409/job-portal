import express from "express";
import { getAllJobs, postJob, getMyJobs, updateJob, deleteJob, getSingleJob} from "../controllers/jobController.js";
import {isAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/updatejob/:id", isAuthenticated, updateJob);      //we will give job id of that particular job that we want to update
router.delete ("/deletejob/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;