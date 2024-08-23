import React, { useEffect, useState } from 'react';
import './App.css';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aptos Wallet Adapter Demo</h1>
        <WalletSelector />
      </header>
    </div>
  );
}

export default App;