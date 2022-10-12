import TokenConfigInterface from '../lib/TokenConfigInterface';
import * as Networks from '../lib/Networks';

const TokenConfig: TokenConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  contractName: 'Token',
  tokenName: 'TOKEN',
  tokenSymbol: 'TOKEN',
  contractAddress: 'xxx',
};

export default TokenConfig;
