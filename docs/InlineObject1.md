# InlineObject1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**side** | **string** | PAY/GET quote direction. PAY means user inputs pay amount, GET means user inputs get amount. If PAY, pay_amount is required. If GET, get_amount is required | [default to undefined]
**payCoin** | **string** | Currency the user pays. Supported currencies can be found on the OTC web quote page. | [default to undefined]
**getCoin** | **string** | Currency the user receives. Supported currencies can be found on the OTC web quote page. | [default to undefined]
**payAmount** | **string** | User payment currency amount | [optional] [default to undefined]
**getAmount** | **string** | Amount of currency received by the user | [optional] [default to undefined]
**createQuoteToken** | **string** | Create quote token: 0: quote preview only; 1: generate quote token for order placement. | [optional] [default to undefined]
**promotionCode** | **string** | Promotion code (optional) | [optional] [default to undefined]

