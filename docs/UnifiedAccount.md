# UnifiedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | Unified account mode: - classic: Classic account mode - multi_currency: Multi-currency margin mode - portfolio: Portfolio margin mode - single_currency: Single-currency margin mode | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Last refresh time | [optional] [default to undefined]
**locked** | **boolean** | Whether the account is locked, valid in cross-currency margin/combined margin mode, false in other modes such as single-currency margin mode | [optional] [default to undefined]
**balances** | [**{ [key: string]: UnifiedBalance; }**](UnifiedBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account assets converted to USD, i.e. the sum of &#x60;(available + freeze) * price&#x60; in all currencies (deprecated, to be removed, replaced by unified_account_total) | [optional] [default to undefined]
**borrowed** | **string** | Total borrowed amount converted to USD, i.e. the sum of &#x60;borrowed * price&#x60; of all currencies (excluding point cards), valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin (cross), effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance (cross), effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin (cross), effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate (cross), effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate (cross), effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Available margin amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotal** | **string** | Total unified account assets, includes both cross and isolated total assets in single-currency/multi-currency mode, only cross total assets in portfolio margin mode | [optional] [default to undefined]
**unifiedAccountTotalLiab** | **string** | Total unified account borrowed, i.e. total cross borrowed, effective in multi-currency margin/portfolio margin mode, 0 in single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotalEquity** | **string** | Total unified account equity, includes both cross and isolated total equity in single-currency/multi-currency mode, only cross total equity in portfolio margin mode | [optional] [default to undefined]
**leverage** | **string** | Account leverage multiplier, effective in multi-currency/portfolio margin mode (deprecated). Currency leverage query API: GET /unified/leverage/user_currency_setting | [optional] [readonly] [default to undefined]
**spotOrderLoss** | **string** | Spot Pending Order Loss, in USDT, effective only in Cross-Currency Margin Mode and Portfolio Margin Mode. | [optional] [default to undefined]
**optionsOrderLoss** | **string** | Option Pending Order Loss, in USDT, effective only in Portfolio Margin Mode. | [optional] [default to undefined]
**spotHedge** | **boolean** | Spot hedging status: true - enabled, false - disabled | [optional] [default to undefined]
**useFunding** | **boolean** | Whether to use Earn funds as margin | [optional] [default to undefined]
**isAllCollateral** | **boolean** | Whether all currencies are used as margin: true - all currencies as margin, false - no | [optional] [default to undefined]

