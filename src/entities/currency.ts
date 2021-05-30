import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly chainId: ChainId
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(ChainId.MAINNET, 18, 'ETH', 'Ether')
  public static readonly EWT: Currency = new Currency(ChainId.EWC, 18, 'EWT', 'Energy Web Token')
  public static readonly VT: Currency = new Currency(ChainId.VOLTA, 18, 'VT', 'Volta Token')
  public static readonly BNB: Currency = new Currency(ChainId.BSC, 18, 'BNB', 'Binance Coin')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(chainId: ChainId, decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static getNativeCurrency(chainId?: ChainId) {
    if (!chainId) {
      throw Error(`No chainId ${chainId}`)
    }

    const ncurr = getNativeCurrency(chainId)

    if (!ncurr) {
      throw Error(`No native currency defined for chainId ${chainId}`)
    }

    return ncurr
  }

  public static getNativeCurrencySymbol(chainId?: ChainId) {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.symbol
  }

  public static getNativeCurrencyName(chainId?: ChainId) {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.name
  }

  public getSymbol(chainId?: ChainId) {
    if (!chainId) {
      return this?.symbol
    }

    if (this?.symbol === ETHER.symbol || this?.symbol === EWT.symbol || this?.symbol === VT.symbol) {
      return Currency.getNativeCurrencySymbol(chainId)
    }

    // if (this?.symbol === 'WETH') {
    //   return `W${Currency.getNativeCurrencySymbol(chainId)}`
    // }

    return this?.symbol
  }

  public getName(chainId?: ChainId) {
    if (!chainId) {
      return this?.name
    }

    if (this?.name === ETHER.name || this?.name === EWT.name || this?.name === VT.name) {
      return Currency.getNativeCurrencyName(chainId)
    }

    return this?.name
  }
}

const ETHER = Currency.ETHER
const EWT = Currency.EWT
const VT = Currency.VT
const BNB = Currency.BNB

const getNativeCurrency = (chainId: ChainId) => {
  switch(chainId) {
    case ChainId.EWC:
      return EWT
    case ChainId.VOLTA:
      return VT
    case ChainId.BSC:
      return BNB
    default:
      return ETHER
  }
}

export { ETHER, EWT, VT, BNB, getNativeCurrency }
