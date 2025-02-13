import { ethers } from 'ethers'

// Testnet ABI Imports
import abiTnBase from '../ABI/TN/Base.json'
import abiTnBond from '../ABI/TN/Bond.json'
import abiTnBondVault from '../ABI/TN/BondVault.json'
import abiTnDao from '../ABI/TN/Dao.json'
import abiTnDaoVault from '../ABI/TN/DaoVault.json'
import abiTnErc20 from '../ABI/TN/ERC20.json'
import abiTnLoan from '../ABI/TN/SpartanLoan.json'
import abiTnLoanVault from '../ABI/TN/SpartanLoanVault.json'
import abiTnMigrate from '../ABI/TN/SPARTANUPGRADE.json'
import abiTnPool from '../ABI/TN/Pool.json'
import abiTnPoolFactory from '../ABI/TN/PoolFactory.json'
import abiTnReserve from '../ABI/TN/Reserve.json'
import abiTnRouter from '../ABI/TN/Router.json'
import abiTnSynth from '../ABI/TN/Synth.json'
import abiTnSynthFactory from '../ABI/TN/SynthFactory.json'
import abiTnSynthVault from '../ABI/TN/SynthVault.json'
import abiTnUtils from '../ABI/TN/Utils.json'
import abiTnWbnb from '../ABI/TN/WBNB.json'

// Mainnet ABI Imports
import abiMnBase from '../ABI/MN/Base.json'
import abiMnBond from '../ABI/MN/Bond.json'
import abiMnBondVault from '../ABI/MN/BondVault.json'
import abiMnDao from '../ABI/MN/Dao.json'
import abiMnDaoVault from '../ABI/MN/DaoVault.json'
import abiMnErc20 from '../ABI/MN/ERC20.json'
import abiMnLoan from '../ABI/MN/SpartanLoan.json'
import abiMnLoanVault from '../ABI/MN/SpartanLoanVault.json'
import abiMnMigrate from '../ABI/MN/SPARTANUPGRADE.json'
import abiMnPool from '../ABI/MN/Pool.json'
import abiMnPoolFactory from '../ABI/MN/PoolFactory.json'
import abiMnReserve from '../ABI/MN/Reserve.json'
import abiMnRouter from '../ABI/MN/Router.json'
import abiMnSynth from '../ABI/MN/Synth.json'
import abiMnSynthFactory from '../ABI/MN/SynthFactory.json'
import abiMnSynthVault from '../ABI/MN/SynthVault.json'
import abiMnUtils from '../ABI/MN/Utils.json'
import abiMnWbnb from '../ABI/MN/WBNB.json'

// import spartaIcon from '../assets/tokens/coin_sparta.svg'
// import bnbIcon from '../assets/tokens/coin_bnb.svg'
// import busdIcon from '../assets/tokens/BUSD.png'
// import daiIcon from '../assets/tokens/DAI.png'

export const abisTN = {
  base: abiTnBase.abi,
  bond: abiTnBond.abi,
  bondVault: abiTnBondVault.abi,
  dao: abiTnDao.abi,
  daoVault: abiTnDaoVault.abi,
  erc20: abiTnErc20.abi,
  loan: abiTnLoan.abi,
  loanVault: abiTnLoanVault.abi,
  migrate: abiTnMigrate.abi,
  pool: abiTnPool.abi,
  poolFactory: abiTnPoolFactory.abi,
  reserve: abiTnReserve.abi,
  router: abiTnRouter.abi,
  synth: abiTnSynth.abi,
  synthFactory: abiTnSynthFactory.abi,
  synthVault: abiTnSynthVault.abi,
  utils: abiTnUtils.abi,
  wbnb: abiTnWbnb.abi,
}

export const abisMN = {
  base: abiMnBase.abi,
  bond: abiMnBond.abi,
  bondVault: abiMnBondVault.abi,
  dao: abiMnDao.abi,
  daoVault: abiMnDaoVault.abi,
  erc20: abiMnErc20.abi,
  loan: abiMnLoan.abi,
  loanVault: abiMnLoanVault.abi,
  migrate: abiMnMigrate.abi,
  pool: abiMnPool.abi,
  poolFactory: abiMnPoolFactory.abi,
  reserve: abiMnReserve.abi,
  router: abiMnRouter.abi,
  synth: abiMnSynth.abi,
  synthFactory: abiMnSynthFactory.abi,
  synthVault: abiMnSynthVault.abi,
  utils: abiMnUtils.abi,
  wbnb: abiMnWbnb.abi,
}

// ADDRESSES FOR TESTS (UPDATE WHENEVER TESTS POINT SOMEWHERE ELSE)
export const TEST_WALLET = '0x0E8196b0EFe6e0062Da1B1d9F03f0a3ab3d53C77'
export const TEST_TOKEN = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
export const TEST_POOL = '0x48963a679e6708a39A166343FE289dbE9aBaEfeF'

export const addressesTN = {
  // OLD ADDRESSES SPV1
  bondv1: '0x4551457647f6810a917AF70Ca47252BbECD2A36c',
  bondv2: '0x2021047F7E3F8c9882e502A63eF036daEFA0B5f6',
  bondv3: '0xa11D0a9F919EDc6D72aF8F90D56735cAd0EBE836',
  daov1: '0xbC6134840a2604D00222F276c16d143dd3666dA3',
  incentivev1: '0xc241d694d51db9e934b147130cfefe8385813b86',
  routerv1: '0x94fFAD4568fF00D921C76aA158848b33D7Bd65d3',
  routerv2a: '0x111589F4cE6f10E72038F1E4a19F7f19bF31Ee35',
  routerv2b: '0x772E6dE5165A70B9a6aBe33fa20ddB78C28E6f50',
  routerv2c: '0x772E6dE5165A70B9a6aBe33fa20ddB78C28E6f50',
  utilsv1: '0x4029A4173F9431763Ee68F5BfCF0C6aA703B1653',
  // OLD ADDRESSES SPV2
  bondv4: '0x282b3dd35Ee21E88462A83F690128Ac63Ca9374D',
  bondVaultv1: '0x8Ac286897c186912A6Fe1eBAE83B8F719bF47213',
  daov2: '0x0dFA75B8e76101aDBf588A4C03653f59DE3D4B23',
  daoVaultv1: '0x2d53adc5e5acc92226FAaFf1a5FcdEf4fEFAA4DD',
  migratev1: '0xFe44c5B65d4F809BF1b992b61844ae6b1dC71fBd',
  poolFactoryv1: '0x47621301afa9FC76d61d6c34f96636D95a788142',
  reservev1: '0xaCb7645eb7784ee421dE0b4C4e2D31bbE29d3bD7',
  routerv3: '0x28966D04A20CEC5B91FC5d55CA62C15DE878d3bD',
  synthFactoryv1: '0x10321d97B2086e5077b4b0a794a40B566Cc4EEE5',
  synthVaultv1: '0xe17BB4C5Ea9B2D1F4e34A6429A2ac1ED2C75e207',
  utilsv2: '0x7c5bBc0A7E21c22936f3788F5d58fB732659B76E',
  // CURRENT ADDRESSES
  bond: '0x282b3dd35Ee21E88462A83F690128Ac63Ca9374D',
  bondVault: '0x8Ac286897c186912A6Fe1eBAE83B8F719bF47213',
  dao: '0x0dFA75B8e76101aDBf588A4C03653f59DE3D4B23',
  daoVault: '0x2d53adc5e5acc92226FAaFf1a5FcdEf4fEFAA4DD',
  migrate: '0x197C0fc4Ea92b58f375De66647368862677C95B7',
  poolFactory: '0x47621301afa9FC76d61d6c34f96636D95a788142',
  reserve: '0xaCb7645eb7784ee421dE0b4C4e2D31bbE29d3bD7',
  router: '0x28966D04A20CEC5B91FC5d55CA62C15DE878d3bD',
  synthFactory: '0x10321d97B2086e5077b4b0a794a40B566Cc4EEE5',
  synthVault: '0xe17BB4C5Ea9B2D1F4e34A6429A2ac1ED2C75e207',
  utils: '0x7c5bBc0A7E21c22936f3788F5d58fB732659B76E',
  // TOKEN ADDRESSES
  bnb: '0x0000000000000000000000000000000000000000',
  wbnb: '0x27c6487C9B115c184Bb04A1Cf549b670a22D2870',
  sparta: '0x6e812dD5B642334bbd17636d3865CE82C3D4d7eB',
}

// List of BSC Mainnet Addresses
export const addressesMN = {
  // OLD ADDRESSES SPV1
  bondv1: '0xDa7d913164C5611E5440aE8c1d3e06Df713a13Da',
  bondv2: '0xE6844821B03828Fd4067167Bc258FA1EEFD1cCdf',
  bondv3: '0xf2EbA4b92fAFD47a6403d24a567b38C07D7A5b43',
  daov1: '0x04e283c9350Bab8A1243ccfc1dd9BF1Ab72dF4f0',
  incentivev1: '0xdbe936901aeed4718608d0574cbaab01828ae016',
  routerv1: '0x4ab5b40746566c09f4B90313D0801D3b93f56EF5',
  routerv2a: '0xDbe936901aeed4718608D0574cbAAb01828AE016',
  routerv2b: '0x9dB88952380c0E35B95e7047E5114971dFf20D07',
  routerv2c: '0x6239891FC4030dc050fB9F7083aa68a2E4Fe426D',
  utilsv1: '0xCaF0366aF95E8A03E269E52DdB3DbB8a00295F91',
  // OLD ADDRESSES SPV2
  bondv4: addressesTN.bondv4,
  bondVaultv1: addressesTN.bondVaultv1,
  daov2: addressesTN.daov2,
  daoVaultv1: addressesTN.daoVaultv1,
  migratev1: addressesTN.migratev1,
  poolFactoryv1: addressesTN.poolFactoryv1,
  reservev1: addressesTN.reservev1,
  routerv3: addressesTN.routerv3,
  synthFactoryv1: addressesTN.synthFactoryv1,
  synthVaultv1: addressesTN.synthVaultv1,
  utilsv2: addressesTN.utilsv2,
  // CURRENT ADDRESSES
  bond: addressesTN.bond,
  bondVault: addressesTN.bondVault,
  dao: addressesTN.dao,
  daoVault: addressesTN.daoVault,
  poolFactory: addressesTN.poolFactory,
  migrate: addressesTN.migrate,
  reserve: addressesTN.reserve,
  router: addressesTN.router,
  synthFactory: addressesTN.synthFactory,
  synthVault: addressesTN.synthVault,
  utils: addressesTN.utils,
  // TOKEN ADDRESSES
  bnb: '0x0000000000000000000000000000000000000000',
  wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  sparta: '0xE4Ae305ebE1AbE663f261Bc00534067C80ad677C',
}

// Listed tokens on testNet
export const listedTokensTN = [
  {
    name: 'Sparta',
    symbol: 'SPARTA',
    decimals: '18',
    address: addressesTN.sparta,
    // icon: spartaIcon,
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: '18',
    address: addressesTN.bnb,
    // icon: bnbIcon,
  },
  {
    name: 'Binance USD',
    symbol: 'BUSD',
    decimals: '18',
    address: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    // icon: busdIcon,
  },
  {
    name: 'DAI StableCoin',
    symbol: 'DAI',
    decimals: '18',
    address: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
    // icon: daiIcon,
  },
]

// Listed tokens on mainnet
export const listedTokensMN = [
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: '18',
    address: addressesMN.wbnb,
    icon: 'filename',
  },
  {
    name: 'Binance USD',
    symbol: 'BUSD',
    decimals: '18',
    address: '',
    icon: 'filename',
  },
]

export const bscRpcsTN = [
  'https://data-seed-prebsc-1-s1.binance.org:8545/',
  'https://data-seed-prebsc-2-s1.binance.org:8545/',
  'https://data-seed-prebsc-1-s2.binance.org:8545/',
  'https://data-seed-prebsc-2-s2.binance.org:8545/',
  'https://data-seed-prebsc-1-s3.binance.org:8545/',
  'https://data-seed-prebsc-2-s3.binance.org:8545/',
]

export const bscRpcsMN = [
  'https://bsc-dataseed.binance.org/',
  'https://bsc-dataseed1.defibit.io/',
  'https://bsc-dataseed1.ninicoin.io/',
]

/**
 * Format long string into a string with '...' separator (ideally for anchor text)
 * @param {string} longString
 * @returns {string} shortString
 */
export const formatShortString = (longString) => {
  const addr = longString || '0x000000000000000'
  const shortString = `${addr.substring(0, 5)}...${addr?.substring(
    addr.length - 3,
    addr.length,
  )}`
  return shortString
}

/**
 * Filter finalArray (or any array) to the scope of the assetAddress
 * @param {string} assetAddress
 * @param {string} finalArray
 * @returns {Object} item from finalArray
 */
export const getItemFromArray = (asset, finalArray) => {
  let arrayItem = finalArray.filter((item) => item.symbol === 'SPARTA')
  if (finalArray.find((item) => item.tokenAddress === asset.tokenAddress)) {
    arrayItem = finalArray.filter(
      (item) => item.tokenAddress === asset.tokenAddress,
    )
  }
  ;[arrayItem] = arrayItem
  return arrayItem
}

/**
 * Trigger change between Addresses
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} Relevant list of addresses
 */
export const changeAddresses = (_network) => {
  const addresses = _network === 'testnet' ? addressesTN : addressesMN
  window.localStorage.setItem('addresses', JSON.stringify(addresses))
  return addresses
}

/**
 * Check localStorage for addresses and set default if missing
 * @returns {Object} Relevant list of addresses
 */
export const getAddresses = () => {
  const addresses = JSON.parse(window.localStorage.getItem('addresses'))
    ? JSON.parse(window.localStorage.getItem('addresses'))
    : changeAddresses('testnet') // Change this to 'mainnet' after mainnet is deployed
  return addresses
}

/**
 * Trigger change between ABIs
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} Relevant list of ABIs
 */
export const changeAbis = (_network) => {
  const abis = _network === 'testnet' ? abisTN : abisMN
  window.localStorage.setItem('abis', JSON.stringify(abis))
  return abis
}

/**
 * Check localStorage for ABIs and set default if missing
 * @returns {Object} Relevant list of ABIs
 */
export const getAbis = () => {
  const abis = JSON.parse(window.localStorage.getItem('abis'))
    ? JSON.parse(window.localStorage.getItem('abis'))
    : changeAbis('testnet') // Change this to 'mainnet' after mainnet is deployed
  return abis
}

/**
 * Trigger random selection of a relevant RPC URL
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} RPC URL
 */
export const changeRpc = (_network) => {
  const rpcUrls = _network === 'testnet' ? bscRpcsTN : bscRpcsMN
  const rpcIndex = Math.floor(Math.random() * rpcUrls.length)
  const rpcUrl = rpcUrls[rpcIndex]
  return rpcUrl
}

/**
 * Trigger change between mainnet and testnet
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} chainId (56), net (mainnet), chain (BSC)
 */
export const changeNetwork = (_network) => {
  console.log(_network)
  // const tempNetwork = 'testnet' // remove this after mainnet is deployed; have the below 'tempNetworks' all changed to '_network'
  const rpcUrl = changeRpc(_network)
  changeAbis(_network)
  changeAddresses(_network)
  const network =
    _network === 'testnet'
      ? { chainId: 97, net: 'testnet', chain: 'BSC', rpc: rpcUrl }
      : { chainId: 56, net: 'mainnet', chain: 'BSC', rpc: rpcUrl }
  window.localStorage.setItem('network', JSON.stringify(network))
  return network
}

/**
 * Check localStorage for net and set default if missing
 * @returns {Object} chainId (56), net (mainnet), chain (BSC)
 */
export const getNetwork = () => {
  const network = JSON.parse(window.localStorage.getItem('network'))
    ? JSON.parse(window.localStorage.getItem('network'))
    : changeNetwork('testnet') // Change this to 'mainnet' after mainnet is deployed
  return network
}

// CONNECT WITH PROVIDER (& SIGNER IF WALLET IS CONNECTED)
export const getWalletProvider = () => {
  const network = getNetwork()
  let provider = new ethers.providers.JsonRpcProvider(network.rpc)
  let connectedWalletType = ''
  if (window.localStorage.getItem('lastWallet') === 'BC') {
    connectedWalletType = window.BinanceChain
  } else {
    connectedWalletType = window.ethereum
  }
  if (window.sessionStorage.getItem('walletConnected')) {
    provider = new ethers.providers.Web3Provider(connectedWalletType)
    provider = provider.getSigner()
  }
  return provider
}

// GET GAS PRICE FROM PROVIDER
export const getProviderGasPrice = () => {
  const provider = getWalletProvider()
  const gasPrice = provider.getGasPrice()
  return gasPrice
}

// CONNECT TO CONTRACT WITH PROVIDER & SIGNER IF AVAILABLE
export const getTokenContract = (tokenAddress) => {
  const abi = getAbis().erc20
  const provider = getWalletProvider()
  const contract = new ethers.Contract(tokenAddress, abi, provider)
  return contract
}

// GET WBNB CONTRACT
export const getWbnbContract = () => {
  const abiWbnb = getAbis().wbnb
  const provider = getWalletProvider()
  const contract = new ethers.Contract(getAddresses().wbnb, abiWbnb, provider)
  return contract
}

/**
 * Get the 'window' object of the connected walletType
 * @param {} - uses localStorage
 * @returns {Object} window.ethereum or BinanceChain
 */
export const getWalletWindowObj = () => {
  let connectedWalletType = ''
  if (window.sessionStorage.getItem('lastWallet') === 'BC') {
    connectedWalletType = window.BinanceChain
  } else {
    connectedWalletType = window.ethereum
  }
  return connectedWalletType
}
