# OtcStableCoinOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payCoin** | **string** | Currency paid by the user. Supported currencies can be queried from the OTC web stablecoin quote page. | [default to undefined]
**getCoin** | **string** | Currency to be received by the user. Supported currencies can be queried from the OTC web stablecoin quote page. | [default to undefined]
**payAmount** | **string** | User payment currency amount | [default to undefined]
**getAmount** | **string** | Amount of currency received by the user | [default to undefined]
**side** | **string** | The side returned by the quote endpoint (used for order validation). For backward compatibility, &#x60;PAY&#x60;/&#x60;GET&#x60; are accepted; new integrations should use the value returned by the quote response. | [default to undefined]
**promotionCode** | **string** | Promotion code (optional) | [optional] [default to undefined]
**quoteToken** | **string** | Parameter returned by the quote API | [default to undefined]

