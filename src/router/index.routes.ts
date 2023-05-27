import walletRoutes from "./wallet.routes";

import {Router} from 'express';
const router = Router()
router.use('/wallet/',walletRoutes)
export default router