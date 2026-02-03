# InlineResponse20026

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order ID | [default to undefined]
**text** | **string** | Client Custom ID | [default to undefined]
**fromAccountType** | **string** | Source &#x60;from&#x60; account (CROSSEX_BINANCE, CROSSEX_OKX, CROSSEX_GATE, CROSSEX, SPOT) | [default to undefined]
**toAccountType** | **string** |  | [default to undefined]
**coin** | **string** | Currency | [default to undefined]
**amount** | **string** | Transfer amount, the amount requested for the transfer | [default to undefined]
**actualReceive** | **string** | Actual credited amount (has a value when status &#x3D; SUCCESS; empty for other statuses) | [optional] [default to undefined]
**status** | **string** | Transfer Status - &#x60;FAIL&#x60;: Failed - &#x60;SUCCESS&#x60;: Successful - &#x60;PENDING&#x60;: Transfer in Progress | [default to undefined]
**failReason** | **string** | Failure reason (has a value when status &#x3D; FAIL; empty for other statuses) | [optional] [default to undefined]
**createTime** | **number** | Creation time of order | [default to undefined]
**updateTime** | **number** | OrderUpdateTime | [default to undefined]

