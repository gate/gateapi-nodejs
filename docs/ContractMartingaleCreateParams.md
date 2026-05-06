# ContractMartingaleCreateParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**investAmount** | **string** | Margin allocated; the server converts it to initial contract size using live contract price, contract multiplier, and minimum lot size. | [default to undefined]
**priceDeviation** | **string** |  | [default to undefined]
**maxOrders** | **number** |  | [default to undefined]
**takeProfitRatio** | **string** |  | [default to undefined]
**direction** | [**ContractMartingaleDirection**](ContractMartingaleDirection.md) |  | [default to undefined]
**leverage** | **string** |  | [default to undefined]
**stopLossPrice** | **string** | Legacy field name. The AIHub &#x60;contract_martingale&#x60; creation path does not map this field today; follow contract martingale rules from the underlying API. MCP tooling must match bot-service behavior. | [optional] [default to undefined]
**profitSharingRatio** | **string** |  | [optional] [default to undefined]

