
import { createWalletSchema, deleteWalletSchema,getWalletsSchema, getWalletByIdSchema, getWalletByUserIdSchema, updateWalletSchema } from "../schema/wallet.schema";
export function validateCreateWallet(req:any, res:any,next:any) {
    const { error, value } = createWalletSchema.validate(req.body);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateWallets(req:any, res:any,next:any) {
    const { error, value } = getWalletsSchema.validate(req.body);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }

  export function validateUpdateWallet(req:any, res:any,next:any){
    const { error, value } = updateWalletSchema.validate(req.body);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateGetWalletById(req:any, res:any,next:any){
    const { error, value } = getWalletByIdSchema.validate(req.params || req.query);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateGetWalletUserById(req:any, res:any,next:any){
    const { error, value } = getWalletByUserIdSchema.validate(req.params || req.query);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateDeleteWallet(req:any, res:any,next:any){
    const { error, value } = deleteWalletSchema.validate(req.body);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }