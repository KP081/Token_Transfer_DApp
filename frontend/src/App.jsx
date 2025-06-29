import { useState , useEffect } from 'react'
import './index.css'

import { ethers } from "ethers";
import tokenAbi from "../../artifacts/contracts/ERC20.sol/MyToken.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {

    const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setAccount(selectedAccount);
  };

  const getBalance = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, tokenAbi.abi, provider);

    const rawBalance = await contract.balanceOf(account);

    setBalance(ethers.utils.formatUnits(rawBalance, 18));
  };

  const sendTokens = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, tokenAbi.abi, signer);

    try {
      const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      alert("Tokens sent!");
      getBalance();
    } catch (err) {
      console.error(err);
      alert("Error sending tokens");
    }
  };

  useEffect(() => {
    if (account) getBalance();
  }, [account]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Token Transfer DApp</h1>
      {account ? (
        <>
          <p className="mb-2">Connected: {account}</p>
          <p className="mb-4">Balance: {balance} MTK</p>
          <input
            type="text"
            placeholder="Recipient Address"
            className="p-2 border rounded mb-2 w-full max-w-md"
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            className="p-2 border rounded mb-2 w-full max-w-md"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={sendTokens}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Tokens
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App
