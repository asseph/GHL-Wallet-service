import Joi from "joi";
export const createWalletSchema = Joi.object({
    walletName: Joi.string().required(),
    userID:Joi.string().required(),
    balance: Joi.number().default(0),
    date: Joi.date()
});
export const deleteWalletSchema = Joi.object({
    id:Joi.string().required()
});
export const getWalletByIdSchema = Joi.object({
    id:Joi.string().required()
})
export const getWalletByUserIdSchema = Joi.object({
    userID:Joi.string().required()
})
export const getWalletsSchema = Joi.object({
    page:Joi.string().required()
})
export const updateWalletSchema = Joi.object({
    
    id:Joi.string().required()

})
