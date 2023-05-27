import mongoose, { Schema, Document } from 'mongoose';

export interface IWallet extends Document {
  userID:string;
  walletName: string;
  balance?: number;
  date: Date;
}

const WalletSchema: Schema = new Schema({
  userID:{type:String,required:true},
  walletName: { type: String, required: true, unique: true },
  balance: { type: Number, default:0 },
  date:{type: Date,required:true}
});

export default mongoose.model<IWallet>('Wallet', WalletSchema);