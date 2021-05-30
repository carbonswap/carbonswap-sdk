import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC = 56,
    EWC = 246,
    VOLTA = 73799
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const getFactoryAddress: (chainId: ChainId) => "0xD44463E5299dC807924Ff94B05aF53b3dF037301" | "0x17854c8d5a41d5A89B275386E24B2F38FD0AfbDd" | "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
export declare const INIT_CODE_HASH = "0x930f72af52e9f7553fd568961dff48b9d73ba993c0ddc3f637f6af07a34e97bd";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
