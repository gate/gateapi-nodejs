# OtcQuoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**side** | **string** | PAY: specify the payment amount (&#x60;pay_amount&#x60; is required); GET: specify the receive amount (&#x60;get_amount&#x60; is required). | [default to undefined]
**payCoin** | **string** | Payment currency. Supported currencies are available on the OTC web quote page. | [default to undefined]
**getCoin** | **string** | Receive currency. Supported currencies are available on the OTC web quote page. | [default to undefined]
**payAmount** | **string** | User payment currency amount | [optional] [default to undefined]
**getAmount** | **string** | Amount of currency received by the user | [optional] [default to undefined]
**createQuoteToken** | **string** | Create quote token: 0: quote preview only; 1: generate quote token for order placement. | [optional] [default to undefined]
**promotionCode** | **string** | Promotion code | [optional] [default to undefined]

