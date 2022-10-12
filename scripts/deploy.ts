import { ethers } from 'hardhat';
import TokenConfig from '../config/TokenConfig';
import { TokenContractType } from '../lib/TokenContractProvider';
import TokenArguments from '../config/TokenArguments';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command line interface.
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract...');

  // We get the contract to deploy
  const Contract = await ethers.getContractFactory(TokenConfig.contractName);
  const contract = await Contract.deploy(...TokenArguments) as TokenContractType;

  await contract.deployed();

  console.log('Contract deployed to:', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
