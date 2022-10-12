import NetworkConfigInterface from './NetworkConfigInterface';

/*
 * Local networks
 */
export const hardhatLocal: NetworkConfigInterface = {
  chainId: 31337,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Block explorer (not available for local chains)',
    generateContractUrl: (contractAddress: string) => `#`,
    generateTransactionUrl: (transactionAddress: string) => `#`,
  },
}

/*
 * Ethereum
 */
export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 5,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Goerli)',
    generateContractUrl: (contractAddress: string) => `https://goerli.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://goerli.etherscan.io/tx/${transactionAddress}`,
  },
}

export const ethereumLegacyTestnet: NetworkConfigInterface = {
  chainId: 4,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Rinkeby)',
    generateContractUrl: (contractAddress: string) => `https://rinkeby.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://rinkeby.etherscan.io/tx/${transactionAddress}`,
  },
}

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) => `https://etherscan.io/tx/${transactionAddress}`,
  },
}
