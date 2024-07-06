import { Router } from "express";
const router = Router();

import associateController from "../controllers/associate.controller.js";

router.post("/create", associateController.createAssociate);

router.get("/getAll", associateController.fetchAllAssociate);

router.get(
  "/getAssocaiteByParentId",
  associateController.fetchAssociateByParentId
);

export default router;
