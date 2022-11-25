import express from "express";
const router = express.Router()
import { upload } from "../middlewares/UploadMulter.js";
import {getUsers, addUplaod, deleteUpload, updateUpload} from '../Controllers/UploadController.js'

router.get('/', getUsers)

router.post('/', upload.single('image'), addUplaod)

router.delete('/:id', deleteUpload)

router.put('/:id' ,updateUpload)

export default router