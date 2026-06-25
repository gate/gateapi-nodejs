# P2pMerchantBooksPlaceBizPushOrderResponseDataRiskEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Prompt display type | [optional] [default to undefined]
**title** | **string** | Risk control prompt title | [optional] [default to undefined]
**msg** | **string** | Risk control prompt message generated based on the field that hit risk control | [optional] [default to undefined]
**action** | [**Array&lt;P2pMerchantBooksPlaceBizPushOrderResponseDataRiskEventAction&gt;**](P2pMerchantBooksPlaceBizPushOrderResponseDataRiskEventAction.md) | Available actions; advertisement content risk control only returns the close action | [optional] [default to undefined]
**contentRiskType** | **string** | Advertisement content field that hit risk control | [optional] [default to undefined]
**tradeTips** | **string** | Prompt message returned when the trade terms hit risk control | [optional] [default to undefined]
**autoReply** | **string** | Prompt message returned when the auto reply hits risk control | [optional] [default to undefined]

## Enum: P2pMerchantBooksPlaceBizPushOrderResponseDataRiskEvent.Type

* `Modal` (value: `'modal'`)


## Enum: P2pMerchantBooksPlaceBizPushOrderResponseDataRiskEvent.ContentRiskType

* `TradeTips` (value: `'trade_tips'`)

* `AutoReply` (value: `'auto_reply'`)

* `TradeTipsAutoReply` (value: `'trade_tips_auto_reply'`)


