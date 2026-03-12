export * from './apiClient';
export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './alphaApi';
import { AlphaApi } from './alphaApi';
export * from './crossExApi';
import { CrossExApi } from './crossExApi';
export * from './deliveryApi';
import { DeliveryApi } from './deliveryApi';
export * from './earnApi';
import { EarnApi } from './earnApi';
export * from './earnUniApi';
import { EarnUniApi } from './earnUniApi';
export * from './flashSwapApi';
import { FlashSwapApi } from './flashSwapApi';
export * from './futuresApi';
import { FuturesApi } from './futuresApi';
export * from './marginApi';
import { MarginApi } from './marginApi';
export * from './marginUniApi';
import { MarginUniApi } from './marginUniApi';
export * from './multiCollateralLoanApi';
import { MultiCollateralLoanApi } from './multiCollateralLoanApi';
export * from './oTCApi';
import { OTCApi } from './oTCApi';
export * from './optionsApi';
import { OptionsApi } from './optionsApi';
export * from './p2pApi';
import { P2pApi } from './p2pApi';
export * from './rebateApi';
import { RebateApi } from './rebateApi';
export * from './spotApi';
import { SpotApi } from './spotApi';
export * from './subAccountApi';
import { SubAccountApi } from './subAccountApi';
export * from './tradFiApi';
import { TradFiApi } from './tradFiApi';
export * from './unifiedApi';
import { UnifiedApi } from './unifiedApi';
export * from './walletApi';
import { WalletApi } from './walletApi';
export * from './withdrawalApi';
import { WithdrawalApi } from './withdrawalApi';

export const APIS = [
    AccountApi,
    AlphaApi,
    CrossExApi,
    DeliveryApi,
    EarnApi,
    EarnUniApi,
    FlashSwapApi,
    FuturesApi,
    MarginApi,
    MarginUniApi,
    MultiCollateralLoanApi,
    OTCApi,
    OptionsApi,
    P2pApi,
    RebateApi,
    SpotApi,
    SubAccountApi,
    TradFiApi,
    UnifiedApi,
    WalletApi,
    WithdrawalApi,
];
