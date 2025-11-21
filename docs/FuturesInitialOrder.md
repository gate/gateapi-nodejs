# FuturesInitialOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract | [default to undefined]
**size** | **number** | Represents the number of contracts that need to be closed, full closing: size&#x3D;0 Partial closing: plan-close-short-position size&gt;0  Partial closing: plan-close-long-position size&lt;0 | [optional] [default to undefined]
**price** | **string** | Order price. Set to 0 to use market price | [default to undefined]
**close** | **boolean** | In One-way Mode, when closing all positions, this must be set to true to perform the closing operation When partially closing positions in One-way Mode or Hedge Mode, you can omit close or set close&#x3D;false | [optional] [default to undefined]
**tif** | **string** | Time in force strategy, default is gtc, market orders currently only support ioc mode  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled | [optional] [default to &#39;gtc&#39;]
**text** | **string** | The source of the order, including: - web: Web - api: API call - app: Mobile app | [optional] [default to undefined]
**reduceOnly** | **boolean** | When set to true, perform automatic position reduction operation. Set to true to ensure that the order will not open a new position, and is only used to close or reduce positions | [optional] [default to undefined]
**autoSize** | **string** | One-way Mode: auto_size is not required Hedge Mode full closing (size&#x3D;0): auto_size must be set, close_long for closing long positions, close_short for closing short positions Hedge Mode partial closing (size≠0): auto_size is not required | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]

## Enum: FuturesInitialOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


