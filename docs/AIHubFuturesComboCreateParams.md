# AIHubFuturesComboCreateParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beginMoneyAmount** | **string** |  | [default to undefined]
**beginMoneyCurrency** | **AIHubFuturesComboCreateParams.BeginMoneyCurrency** |  | [default to undefined]
**assetInfo** | [**Array<AIHubFuturesComboAsset>**](AIHubFuturesComboAsset.md) |  | [default to undefined]
**leverage** | **number** |  | [default to undefined]
**period** | **AIHubFuturesComboCreateParams.Period** |  | [optional] [default to undefined]
**threshold** | **string** | Ratio 0.01–0.50; exclusive with period. | [optional] [default to undefined]
**stopProfit** | **string &#124; null** |  | [optional] [default to undefined]
**stopLoss** | **string &#124; null** |  | [optional] [default to undefined]

## Enum: AIHubFuturesComboCreateParams.BeginMoneyCurrency

* `USDT` (value: `'USDT'`)


## Enum: AIHubFuturesComboCreateParams.Period

* `_30m` (value: `'30m'`)

* `_1h` (value: `'1h'`)

* `_4h` (value: `'4h'`)

* `_8h` (value: `'8h'`)

* `_12h` (value: `'12h'`)

* `_1d` (value: `'1d'`)

* `_3d` (value: `'3d'`)

* `_7d` (value: `'7d'`)

* `_14d` (value: `'14d'`)

* `_28d` (value: `'28d'`)


