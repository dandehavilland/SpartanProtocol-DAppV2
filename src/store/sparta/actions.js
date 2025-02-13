import * as Types from './types'
import { getSpartaContract } from '../../utils/web3Contracts'
import { payloadToDispatch, errorToDispatch } from '../helpers'
import { getWalletProvider } from '../../utils/web3'

export const spartaLoading = () => ({
  type: Types.SPARTA_LOADING,
})

export const getSpartaGlobalDetails = () => async (dispatch) => {
  dispatch(spartaLoading())
  const contract = getSpartaContract()

  try {
    let awaitArray = [
      contract.callStatic.emitting(),
      contract.callStatic.secondsPerEra(),
    ]
    awaitArray = await Promise.all(awaitArray)
    const globalDetails = {
      emitting: awaitArray[0],
      secondsPerEra: awaitArray[1].toString(),
    }
    dispatch(payloadToDispatch(Types.SPARTA_GLOBAL_DETAILS, globalDetails))
  } catch (error) {
    dispatch(errorToDispatch(Types.SPARTA_ERROR, `${error}.`))
  }
}

export const getAdjustedClaimRate = (assetAddress) => async (dispatch) => {
  dispatch(spartaLoading())
  const contract = getSpartaContract()

  try {
    const adjustedClaimRate = await contract.callStatic.getAdjustedClaimRate(
      assetAddress,
    )
    dispatch(
      payloadToDispatch(Types.SPARTA_ADJUSTED_CLAIM_RATE, adjustedClaimRate),
    )
  } catch (error) {
    dispatch(errorToDispatch(Types.SPARTA_ERROR, `${error}.`))
  }
}

export const claim = (assetAddress, amount, justCheck) => async (dispatch) => {
  dispatch(spartaLoading())
  const provider = getWalletProvider()
  const contract = getSpartaContract()

  try {
    let claimed = {}
    if (justCheck) {
      claimed = await contract.callStatic.claim(assetAddress, amount)
    } else {
      const gPrice = await provider.getGasPrice()
      // const gLimit = await contract.estimateGas.claim(assetAddress, amount)
      claimed = await contract.claim(assetAddress, amount, {
        gasPrice: gPrice,
        // gasLimit: gLimit,
      })
    }
    dispatch(payloadToDispatch(Types.SPARTA_CLAIM, claimed))
  } catch (error) {
    dispatch(errorToDispatch(Types.SPARTA_ERROR, `${error}.`))
  }
}
