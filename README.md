# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
Here's your content beautifully formatted as a clean, professional, and readable **Markdown guide** — ideal for use in a `README.md` or project documentation.

---

# 🚀 Token Transfer DApp

This project demonstrates how to:

* ✅ Deploy a custom **ERC-20 token**
* ✅ Interact with it via a **React Web UI**
* ✅ View wallet **token balances**
* ✅ **Send tokens** between accounts

---

## 🧪 Step-by-Step Testing Guide

> ⚠️ **Note:** All terminal commands should be run from the project **root directory**.

---

### 📦 1. Compile Smart Contract

```bash
npx hardhat compile
```

---

### 📄 2. Copy ABI to Frontend

* Open:

  ```
  artifacts/contracts/ERC20.sol/MyToken.json
  ```

* Copy the **`abi` array** and create a new file in your frontend:

  **`frontend/src/MyTokenABI.json`**

  ```json
  {
    "abi": [ /* paste abi array here */ ]
  }
  ```

---

### 🔌 3. Open 3 Terminals


#### 🟢 Terminal 1: Start Hardhat Node

```bash
npx hardhat node
```


#### 🟠 Terminal 2: Deploy Contract

If using classic scripts:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

If using **Ignition** modules:

```bash
npx hardhat ignition deploy ./ignition/modules/deploy.js
```

✅ After deployment, copy the printed **contract address**.

#### 🔵 Terminal 3: Start Frontend (wait until Step 6)

---

### ✍️ 4. Update Frontend with Contract Address


In **`App.jsx`**, update the placeholder with your contract address:

```js
const contractAddress = "PASTE_YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
```

---

### 🦊 5. Setup MetaMask for Local Network


#### 🔁 Add Custom Network

* Open MetaMask → Network Dropdown → **Add Network**
* Fill:

  * **Name:** Hardhat Localhost
  * **RPC URL:** `http://127.0.0.1:8545`
  * **Chain ID:** `31337`
  * **Currency Symbol:** ETH
  * Leave **Block Explorer URL** empty


#### 👤 Import Hardhat Account

* Go to Terminal 1 → Copy **Account #0 Private Key**
* In MetaMask:

  * Click profile → *Import Account* → Paste private key
  * You'll now see **10,000 ETH**

> 🔔 Make sure you're on the **Hardhat Localhost** network (top left in MetaMask)

---

### 💻 6. Start the Frontend

In **Terminal 3**, run:

```bash
npm run dev
# or
npm start
```

---

### 🔐 7. Connect Wallet in UI


* Open the DApp in your browser
* Click **Connect Wallet**
* Approve in MetaMask

✅ After connecting:

* You’ll see your account address
* Balance will show `1000000.0 MTK`
* Token transfer UI will appear

---

### 📤 8. Send Tokens to Another Account


#### 👤 Import Second Account in MetaMask

* From Terminal 1, choose another account (e.g., Account #1)
* Import it into MetaMask using its **private key**
* Make sure this account is also on **Hardhat Localhost**


#### 📝 Use Web UI

* Paste the **second account address** in **Recipient Address**
* Set **Amount** to `100`
* Click **Send Tokens**


✅ You'll see the **sender balance decrease**.

---

### 📥 9. Verify Receiver’s Balance

* Switch MetaMask to the **second account**
* Refresh or reconnect in the DApp


✅ You’ll see the balance: `100 MTK`
🎉 Token transfer successful!

---

### 🧹 10. Terminate All Terminals

Once testing is complete, close all three terminals to shut down:

* Hardhat Node
* Deployment terminal
* React Dev Server

---

## ✅ All Done!

You've now tested a full **ERC-20 token deployment**, connected MetaMask, and performed **token transfers** between local accounts — all in a secure, testable Hardhat environment.