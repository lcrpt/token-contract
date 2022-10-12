import { Token as ContractType } from '../typechain/index';

import { ethers } from 'hardhat';
import TokenConfig from '../config/TokenConfig';

export default class TokenContractProvider {
  public static async getContract(): Promise<ContractType> {
    // Check configuration
    if (null === TokenConfig.contractAddress) {
      throw '\x1b[31merror\x1b[0m ' + 'Please add the contract address to the configuration before running this command.';
    }

    if (await ethers.provider.getCode(TokenConfig.contractAddress) === '0x') {
      throw '\x1b[31merror\x1b[0m ' + `Can't find a contract deployed to the target address: ${TokenConfig.contractAddress}`;
    }
    
    return await ethers.getContractAt(TokenConfig.contractName, TokenConfig.contractAddress) as ContractType;
  }
};

export type TokenContractType = ContractType;
