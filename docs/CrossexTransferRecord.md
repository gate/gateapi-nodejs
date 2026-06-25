# CrossexTransferRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order ID | [default to undefined]
**text** | **string** | Client Custom ID | [default to undefined]
**fromAccountType** | **string** | &#x60;from&#x60; credit account touched by this operation (&#x60;CROSSEX_BINANCE&#x60;, &#x60;CROSSEX_OKX&#x60;, &#x60;CROSSEX_GATE&#x60;, &#x60;CROSSEX_BYBIT&#x60;, &#x60;CROSSEX_KRAKEN&#x60;, &#x60;CROSSEX_HYPERLIQUID&#x60;, &#x60;CROSSEX&#x60;, &#x60;SPOT&#x60;). | [default to undefined]
**toAccountType** | **string** | &#x60;to&#x60; debit account handled by this operation (&#x60;CROSSEX_BINANCE&#x60;, &#x60;CROSSEX_OKX&#x60;, &#x60;CROSSEX_GATE&#x60;, &#x60;CROSSEX_BYBIT&#x60;, &#x60;CROSSEX_KRAKEN&#x60;, &#x60;CROSSEX_HYPERLIQUID&#x60;, &#x60;CROSSEX&#x60;, &#x60;SPOT&#x60;). | [default to undefined]
**coin** | **string** | Currency | [default to undefined]
**amount** | **string** | Transfer amount, the amount requested for the transfer | [default to undefined]
**actualReceive** | **string** | Actual credited amount (has a value when status &#x3D; SUCCESS; empty for other statuses) | [optional] [default to undefined]
**status** | **string** | Transfer Status - &#x60;FAIL&#x60;: Failed - &#x60;SUCCESS&#x60;: Successful - &#x60;PENDING&#x60;: Transfer in Progress | [default to undefined]
**failReason** | **string** | Failure reason (has a value when status &#x3D; FAIL; empty for other statuses) | [optional] [default to undefined]
**createTime** | **number** | Creation time of order | [default to undefined]
**updateTime** | **number** | OrderUpdateTime | [default to undefined]

