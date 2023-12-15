import { Wordlist } from 'ethers'

const getWord = (index: number) => (1 + 48 * index).toString().padStart(5, '0')

export class CoolWalletWordList extends Wordlist {
  constructor () { super('CoolWallet') }

  getWord (index: number): string {
    return getWord(index)
  }

  getWordIndex (word: string): number {
    return (Number.parseInt(word) - 1) / 48
  }

  static wordlist () {
    return Array.from({ length: 2048 }, (_, index) => getWord(index))
  }
}
