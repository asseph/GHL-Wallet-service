import { Router } from 'express';
import WalletController from '../controllers/wallet.controller';
import {validateCreateWallet, validateDeleteWallet, validateGetWalletById, validateGetWalletUserById, validateUpdateWallet, validateWallets} from '../validations/wallet.validation';


const walletRoutes = Router();

const walletController = new WalletController();

walletRoutes.get('/getWallet/:id', validateGetWalletById,walletController.getWalletById);
walletRoutes.get('/getWalletByUser/:userID', validateGetWalletUserById,walletController.getWalletByUserId);
walletRoutes.get('/getWallets/:page', validateWallets,walletController.getAllWallets);
walletRoutes.post('/createWallet',validateCreateWallet, walletController.createWallet);
walletRoutes.put('/updateWallet', walletController.updateWallet);
walletRoutes.delete('/deleteWallet',validateDeleteWallet,walletController.deleteWallet);


export default walletRoutes;