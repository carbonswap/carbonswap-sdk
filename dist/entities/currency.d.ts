import { ChainId } from '../constants';
/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly chainId: ChainId;
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: Currency;
    static readonly EWT: Currency;
    static readonly VT: Currency;
    static readonly BNB: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(chainId: ChainId, decimals: number, symbol?: string, name?: string);
    static getNativeCurrency(chainId?: ChainId): Currency;
    static getNativeCurrencySymbol(chainId?: ChainId): string | undefined;
    static getNativeCurrencyName(chainId?: ChainId): string | undefined;
    getSymbol(chainId?: ChainId): string | undefined;
    getName(chainId?: ChainId): string | undefined;
}
declare const ETHER: Currency;
declare const EWT: Currency;
declare const VT: Currency;
declare const BNB: Currency;
declare const getNativeCurrency: (chainId: ChainId) => Currency;
export { ETHER, EWT, VT, BNB, getNativeCurrency };
