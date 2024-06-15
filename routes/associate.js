import { Router} from 'express';
const router = Router();

import associateController from '../controllers/associate.controller.js';

router.post('/create', associateController.createAssociate);

router.post('/getAll', associateController.fetchAllAssociate);

router.post('/getAssocaiteByParentId', associateController.fetchAssociateByParentId);

export default router;