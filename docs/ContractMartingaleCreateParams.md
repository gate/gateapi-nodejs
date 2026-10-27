# ContractMartingaleCreateParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**investAmount** | **string** | Total strategy budget, not first-order margin. The server uses the complete existing ladder formula, owner fee and live contract facts, quantizes quantity down and rechecks before allocation. Minimum infeasible budget is rejected. | [default to undefined]
**priceDeviation** | **string** |  | [default to undefined]
**maxOrders** | **number** | Maximum additional entries, excluding the first; preserve this legacy meaning. | [default to undefined]
**takeProfitRatio** | **string** |  | [default to undefined]
**direction** | [**ContractMartingaleDirection**](ContractMartingaleDirection.md) |  | [default to undefined]
**leverage** | **string** |  | [default to undefined]
**stopLossPrice** | **string** | Positive fixed stop price; requires explicit stop_loss_price_type. Missing both leaves the old no-fixed-stop request unchanged. | [optional] [default to undefined]
**profitSharingRatio** | **string** |  | [optional] [default to undefined]
**stopLossPriceType** | **ContractMartingaleCreateParams.StopLossPriceType** |  | [optional] [default to undefined]

## Enum: ContractMartingaleCreateParams.StopLossPriceType

* `Last` (value: `'last'`)

* `Index` (value: `'index'`)

* `Mark` (value: `'mark'`)


