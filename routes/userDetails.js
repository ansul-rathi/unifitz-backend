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

router.post("/upload", upload.array("images", 10),(err: any, req: any, res: any, next: any) => {
  if (err) {
    console.error("Upload Error:", err.message);
    return res.status(400).json({ error: err.message });
  }
  next();
},
  userDetailsController.imagesUpload
);

export default router;