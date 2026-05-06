# GetPendingTransactionListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cryptoCurrency** | **string** | Cryptocurrency symbol. | [default to undefined]
**fiatCurrency** | **string** | Fiat currency | [default to undefined]
**orderTab** | **string** | Order tab: &#x60;pending&#x60; in progress (&#x60;OPEN&#x60;, &#x60;PAID&#x60;, &#x60;LOCKED&#x60;, &#x60;TEMP&#x60;); &#x60;dispute&#x60; in dispute; default &#x60;pending&#x60;. | [optional] [default to undefined]
**selectType** | **string** | Order side filter: &#x60;buy&#x60; buy orders; &#x60;sell&#x60; sell orders; empty: all. | [optional] [default to undefined]
**status** | **string** | Order status filter. &#x60;open&#x60; unpaid (&#x60;OPEN&#x60;); &#x60;paid&#x60; paid (&#x60;PAID&#x60;); &#x60;locked&#x60; locked (&#x60;LOCKED&#x60;); &#x60;dispute&#x60; in dispute; empty or omitted uses the default range for &#x60;order_tab&#x60;. | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**startTime** | **number** | Start timestamp, default is 00:00 89 days ago | [optional] [default to undefined]
**endTime** | **number** | End timestamp, default is 23:59:59 today | [optional] [default to undefined]

## Enum: GetPendingTransactionListRequest.OrderTab

* `Pending` (value: `'pending'`)

* `Dispute` (value: `'dispute'`)


