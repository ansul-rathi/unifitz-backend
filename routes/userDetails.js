import { Router} from 'express';
const router = Router();
const multer = require("multer");

import userDetailsController from '../controllers/userDetails.controller.js';

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images to "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});

  const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  };
  
  // Configure multer
  const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter 
  });

// ROUTE 1:  Create a User using: POST "/api/auth/createuser". No login required
router.post('/createUserDetails', userDetailsController.createNewUserDetails);

router.get('/getAllUserDetails', userDetailsController.getAllUserDetails);

app.post("/upload", upload.array("images", 10), (req, res) => {
    if (!req.files) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    userDetailsController.imagesUpload();
  });

export default router;