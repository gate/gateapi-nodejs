# UnifiedBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **string** | Cross available balance, deducted futures isolated margin occupation and frozen amount (futures isolated occupation, i.e. futures isolated balance), effective in single-currency/multi-currency/portfolio margin mode. | [optional] [default to undefined]
**freeze** | **string** | Frozen amount, effective in single-currency/multi-currency/portfolio margin mode | [optional] [default to undefined]
**borrowed** | **string** | Borrowed amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**negativeLiab** | **string** | Negative balance borrowing, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**futuresPosLiab** | **string** | Contract opening position borrowing currency (abandoned, to be offline field) | [optional] [default to undefined]
**equity** | **string** | Currency equity amount (cross), effective in single-currency/multi-currency/portfolio margin mode | [optional] [default to undefined]
**totalFreeze** | **string** | Total frozen (deprecated, to be removed) | [optional] [default to undefined]
**totalLiab** | **string** | Total borrowed amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**spotInUse** | **string** | The amount of spot hedging is valid in the combined margin mode, and is 0 in other margin modes such as single currency and cross-currency margin modes | [optional] [default to undefined]
**funding** | **string** | Uniloan financial management amount, effective when turned on as a unified account margin switch | [optional] [default to undefined]
**fundingVersion** | **string** | Funding version | [optional] [default to undefined]
**crossBalance** | **string** | Full margin balance is valid in single currency margin mode, and is 0 in other modes such as cross currency margin/combined margin mode | [optional] [default to undefined]
**isoBalance** | **string** | Futures isolated balance, effective in single-currency and multi-currency margin mode, 0 in portfolio margin mode | [optional] [default to undefined]
**im** | **string** | Cross initial margin, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**mm** | **string** | Cross maintenance margin, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**imr** | **string** | Cross initial margin rate, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**mmr** | **string** | Cross maintenance margin rate, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**marginBalance** | **string** | Cross margin balance, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**availableMargin** | **string** | Cross available margin, only effective for USDT in single-currency margin mode, 0 in multi-currency/portfolio margin mode | [optional] [default to undefined]
**enabledCollateral** | **boolean** | Currency enabled as margin: true - Enabled, false - Disabled | [optional] [default to undefined]
**balanceVersion** | **number** | Balance version number | [optional] [default to undefined]

