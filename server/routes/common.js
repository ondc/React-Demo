import express from 'express';
import Common from '../controller/common';

const router = express.Router();

router.get('/piccaptcha', Common.getPicCaptcha);
router.get('/msgcaptcha', Common.getMsgCaptcha);

export default router;