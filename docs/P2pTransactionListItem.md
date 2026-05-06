# P2pTransactionListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**typeBuy** | **number** | Order side from current user\&#39;s view. &#x60;1&#x60;: buy; &#x60;0&#x60;: sell. | [optional] [default to undefined]
**timest** | **string** | Creation time of order | [optional] [default to undefined]
**timestExpire** | **string** | Order expiration time | [optional] [default to undefined]
**timestamp** | **number** | Order creation timestamp | [optional] [default to undefined]
**rate** | **string** | Order price in fiat currency. | [optional] [default to undefined]
**amount** | **string** | Order size in cryptocurrency. | [optional] [default to undefined]
**total** | **string** | Total fiat amount of the order. | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**status** | **string** | Display status: &#x60;unpay&#x60; awaiting payment; &#x60;paid&#x60; buyer paid; &#x60;unconfirmed&#x60; awaiting seller confirmation; &#x60;locked&#x60; locked; &#x60;finished&#x60; completed; &#x60;cancel&#x60; canceled; &#x60;expired&#x60; expired; &#x60;bclosed&#x60; arbitration filled; &#x60;sclosed&#x60; arbitration canceled. | [optional] [default to undefined]
**itsRealname** | **string** | Counterparty real name or verified display name. | [optional] [default to undefined]
**itsUid** | **string** | Counterparty crypto UID. | [optional] [default to undefined]
**itsNick** | **string** | Counterparty nickname | [optional] [default to undefined]
**sellerRealname** | **string** | Seller real name or verified display name. | [optional] [default to undefined]
**buyerRealname** | **string** | Buyer real name or verified display name. | [optional] [default to undefined]
**cancelable** | **number** | Whether the order can be canceled. &#x60;1&#x60;: yes; &#x60;0&#x60;: no. | [optional] [default to undefined]
**currencyType** | **string** | Cryptocurrency symbol. | [optional] [default to undefined]
**wantType** | **string** | Fiat currency | [optional] [default to undefined]
**hidePayment** | **number** | Whether payment methods are hidden. &#x60;1&#x60;: hidden; &#x60;0&#x60;: visible. | [optional] [default to undefined]
**selPaytype** | **string** | Selected payment type for this order, e.g. &#x60;bank&#x60;, &#x60;alipay&#x60;, &#x60;wechat&#x60;, &#x60;paypal&#x60;, &#x60;swift&#x60;, &#x60;wu&#x60;. | [optional] [default to undefined]
**payOthers** | [**Array&lt;P2pTransactionListResultPayOthers&gt;**](P2pTransactionListResultPayOthers.md) | Other payment method details; may appear on historical orders. | [optional] [default to undefined]
**cdTime** | **number** | Countdown seconds for the current order. | [optional] [default to undefined]
**orderType** | **number** | Order type: &#x60;1&#x60; standard; &#x60;2&#x60; partner; &#x60;3&#x60; flash swap; &#x60;4&#x60; Web3. | [optional] [default to undefined]
**orderTag** | **Array&lt;string&gt;** | Order tags | [optional] [default to undefined]
**convertInfo** | [**P2pTransactionConvertInfo**](P2pTransactionConvertInfo.md) |  | [optional] [default to undefined]

