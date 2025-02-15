import Associate from "../models/associate.js";
import UserDetails from "../models/userDetails.js";

const createNewUserDetails = async (req, res) => {
//   let { email } = req.body;
//   let user = await Associate.findOne({ email });
//   if (!user) {
//     const newAssociate = await Associate.create(req.body);
//     return newAssociate;
//   } else {
//     return res
//       .status(400)
//       .json({ success, error: "Sorry a user with this email already exists" });
//   }
 const payload = req.body;
 try{
    const newUserDetail = await UserDetails.create(payload);
    return res.send(newUserDetail);
 }catch(err){
    return res.send({error: err})
 }
};

const getAllUserDetails = async (req, res) => {
    try{
        const userDetails = await UserDetails.find({});
        return res.send(userDetails);
    }catch(err){
        return res.send({error: err});
    }
//   const allAssociates = await Associate.find();
//   res.json(allAssociates);
};

const imagesUpload = async() => {
    const imageFilenames = req.files.map(file => file.filename);
    const user = await UserDetails.findByIdAndUpdate(
        { _id: req.body.userId },
        { $push: { images: { $each: imageFilenames } } }, // Append images
        { new: true }
      );
  
    return res.json({ message: "Files uploaded successfully", files: req.files });
}

// const fetchAssociateByParentId = async (req, res) => {
//   const parentId = req.query.parentId;
//   if (parentId) {
//     const associates = await Associate.find({ parentId });
//     res.json(associates);
//   } else {
//     return res
//       .status(400)
//       .json({ error: "Sorry this associate is not exists" });
//   }
// };

// export default { createAssociate, fetchAllAssociate, fetchAssociateByParentId };
export default { createNewUserDetails, getAllUserDetails };
