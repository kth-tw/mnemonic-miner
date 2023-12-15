import crypto from 'node:crypto'
import * as ethers from 'ethers'
import { CoolWalletWordList } from './coolwallet'

const prefix = ['0000', '1234', 'abcd', '0123']
const length = 24
const batchSize = 1000
while (true) {
  let finish = false
  const start = (new Date()).getTime()
  for (let i = 0; i < batchSize; i += 1) {
    const mneonic = ethers.Mnemonic.fromEntropy(crypto.randomBytes(length / 3 * 4))
    const { address } = ethers.HDNodeWallet.fromMnemonic(mneonic)
    // console.log(address)
    if (prefix.some(s => RegExp(`^0x${s}`, 'i').test(address))) {
      console.log(`address: ${address}`)
      console.log(`en: ${mneonic.phrase}`)
      console.log(`CoolWallet: ${ethers.Mnemonic.fromEntropy(mneonic.entropy, undefined, new CoolWalletWordList()).phrase}`)
      finish = true
      break
    }
  }
  const end = (new Date()).getTime()
  console.log(`mine ${batchSize} address, rate = ${1000 / (end - start) * 1000} / s`)
  if (finish) {
    break
  }
}
