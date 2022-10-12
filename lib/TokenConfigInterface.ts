import NetworkConfigInterface from '../lib/NetworkConfigInterface';

export default interface CollectionConfigInterface {
  testnet: NetworkConfigInterface;
  mainnet: NetworkConfigInterface;
  contractName: string;
  tokenName: string;
  tokenSymbol: string;
  contractAddress: string|null;
};
