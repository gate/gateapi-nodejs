# AIHubRebalanceCreateParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beginMoneyAmount** | **string** |  | [default to undefined]
**beginMoneyCurrency** | **AIHubRebalanceCreateParams.BeginMoneyCurrency** |  | [default to undefined]
**assetInfo** | [**Array<AIHubRebalanceAsset>**](AIHubRebalanceAsset.md) |  | [default to undefined]
**period** | **string** | Product interval between 1m and 28d. | [optional] [default to undefined]
**threshold** | **string** | Positive ratio below 1, at most four decimal places. | [optional] [default to undefined]
**closeFlag** | **AIHubRebalanceCreateParams.CloseFlag** |  | [optional] [default to CloseFlag_NUMBER_1]
**isUseBase** | **boolean** |  | [optional] [default to undefined]
**stopProfit** | **string** |  | [optional] [default to undefined]
**stopLoss** | **string** |  | [optional] [default to undefined]

## Enum: AIHubRebalanceCreateParams.BeginMoneyCurrency

* `USDT` (value: `'USDT'`)


## Enum: AIHubRebalanceCreateParams.CloseFlag

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


