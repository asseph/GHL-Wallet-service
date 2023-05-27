import { Request, Response, NextFunction } from "express";
import WalletModel from "../models/wallet.model";
import axios from "axios";
import walletModel from "../models/wallet.model";
class WalletController {
  async getAllWallets(req: Request, res: Response, next: NextFunction) {
    try {
      const { page } = req.params || req.query;
      const limit = 10;
      await WalletModel.find()
        .skip(+limit * +page - +limit)
        .limit(+limit)
        .exec((err_1, data) => {
          if (err_1) {
            return res.status(200).json({
              message: err_1,
              code: 200,
              data: data,
            });
          } else {
            WalletModel.count().exec((err_2, count) => {
              const totalPages = Math.ceil(count / limit);
              if (err_2)
                return res.status(500).json({
                  message: err_2,
                  code: 500,
                });
              else if (data.length > 0) {
                return res.status(200).json({
                  message: "List of all wallets are found!",
                  code: 200,
                  data: data,
                  currentPage: page,
                  totalPages: totalPages,
                  totalRecords: count,
                });
              }
            });
          }
        });
    } catch (err) {
      next(err);
    }
  }

  async createWallet(req: Request, res: Response, next: NextFunction) {
    try {
      const { walletName,userID } = req.body;

      const wallet = await WalletModel.create({
        walletName,
        userID,
        date: new Date(),
      });
      if (wallet) {
        res.status(200).json({
          message: "A wallet have been created!",
          code: 200,
          data: wallet,
        });
      } else {
        res.json({
          message: "Wallet not able to create!",
          code: 201,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async getWalletById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params || req.query;
      await WalletModel.findById(id).exec((err_1, data) => {
        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
          });
        } else {
          return res.status(200).json({
            code: 200,
            message: "A wallet is available here!",
            data: data,
          });
        }
      });
    } catch (err) {
      next(err);
    }
  }
  async getWalletByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { userID } = req.params || req.query;
      await WalletModel.find({userID:userID}).exec((err_1, data) => {
        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
          });
        } else {
          return res.status(200).json({
            code: 200,
            message: "A wallet is available here!",
            data: data,
          });
        }
      });
    } catch (err) {
      next(err);
    }
  }

  async updateWallet(req: Request, res: Response, next: NextFunction) {
    try {
      const { transactionAmount, walletId, transactionType } = req.body;
      
      await walletModel
            .findById(walletId)
            .then(async (obj_2: any) => {
              
              const previousBalance = parseInt(obj_2?.balance) || 0;
              let balance = previousBalance;
              
              const requestBalance = parseInt(
                transactionAmount
              );

              if (transactionType === "Credit") {
                balance = balance + requestBalance;
              } else {
                balance = balance - requestBalance;
              }

              if (balance > 0) {
                await WalletModel.findOneAndUpdate(
                  { _id: walletId },
                  { $set: { balance: balance } }
                ).then(() => {
                  return res.status(200).json({
                    code: 200,
                    message: "A wallet is updated now!",
                  });
                });
              } else {
                return res.status(200).json({
                  code: 200,
                  message: "Not able to update wallet!",
                });
              }
            });  
    } catch (err) {
      next(err);
    }
  }

  async deleteWallet(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      await WalletModel.deleteOne({ _id: id }).exec((err_1, data) => {
        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
          });
        } else if (data.deletedCount > 0) {
          return res.status(200).json({
            code: 200,
            message: "A wallet is deleted now!",
          });
        } else {
          return res.status(202).json({
            code: 202,
            message: "Wallet already deleted!",
          });
        }
      });
    } catch (err) {
      next(err);
    }
  }
}
export default WalletController;
