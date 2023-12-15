import crypto from 'node:crypto'
import * as ethers from 'ethers'

const prefix = ['0000', '1234', 'abcd', '0123']
const length = 24
while (true) {
  const mneonic = ethers.Mnemonic.fromEntropy(crypto.randomBytes(length / 3 * 4))
  const { address } = ethers.HDNodeWallet.fromMnemonic(mneonic)
  console.log(address)
  if (prefix.some(s => RegExp(`^0x${s}`, 'i').test(address))) {
    console.log(mneonic.phrase)
    console.log(address)
    break
  }
}
