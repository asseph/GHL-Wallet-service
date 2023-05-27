# Go High Level Wallet Microservice 

This is a simple wallet microservice built with Node.js, Express.js, MongoDB, and services are authorized with JSON Web Token (JWT).
Wallet service is authorized with shared session with auth microservice.

### Requirements
- Node.js and npm
- MongoDB

### Installation
- Clone repository
git clone https://github.com/aksaxena1991/gohighlevel-wallet-service.git

- Install dependencies
cd gohighlevel-wallet-service
npm install

- Create a [.env] file in the root directory of the project, and add the following environment variables:
PORT=3001
MONGODB_URI=mongodb://localhost:27017/walletService
JWT_SECRET=goHighLevel

- Start server
npm run start

### Usage
- Create Wallet
Navigate to http://localhost:3001/wallet/createWallet.
Enter a wallet name.
Click the "Submit" button.
If the wallet is already there, then you will be able to recharge wallet.

- Recharge Wallet
Navigate to http://localhost:3001/wallet/updateWallet.
Enter the type of transaction [Credit, Debit], amount of recharge with respect to the walletId.
Click the "Submit" button.

### Features
The customer wallet application has the following features:

- Create Wallet: Users can create their single wallet.
- Recharge Wallet: If wallet is already created then user can recharge the wallet.
