import crypto from 'node:crypto'
import * as ethers from 'ethers'
import { CoolWalletWordList } from './coolwallet'

const prefix = [
  '000000',
  '111111',
  '222222',
  '333333',
  '444444',
  '555555',
  '666666',
  '777777',
  '888888',
  '999999',
  'aaaaaa',
  'bbbbbb',
  'cccccc',
  'dddddd',
  'eeeeee',
  'ffffff',
  '012345',
  '123456',
  'abcdef',
]
const length = 24
// const batchSize = 1000
while (true) {
  // const finish = false
  // const start = (new Date()).getTime()
  // for (let i = 0; i < batchSize; i += 1) {
  const mneonic = ethers.Mnemonic.fromEntropy(crypto.randomBytes(length / 3 * 4))
  const { address } = ethers.HDNodeWallet.fromMnemonic(mneonic)
  if (prefix.some(s => RegExp(`^0x${s}`,
    'i').test(address))) {
    console.log(`address: ${address}`)
    console.log(`en: ${mneonic.phrase}`)
    console.log(`CoolWallet: ${ethers.Mnemonic.fromEntropy(mneonic.entropy, undefined, new CoolWalletWordList()).phrase}`)
    console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------')
    // finish = true
    // break
  }
  // }
  // const end = (new Date()).getTime()
  // console.log(`mine ${batchSize} address, rate = ${1000 / (end - start) * 1000} / s`)
  // if (finish) {
  //   break
  // }
}
