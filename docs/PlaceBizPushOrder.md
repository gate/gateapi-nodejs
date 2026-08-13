# PlaceBizPushOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyType** | **string** | Cryptocurrency symbol. | [default to undefined]
**exchangeType** | **string** | Fiat currency | [default to undefined]
**type** | **string** | Ad operation type. &#x60;0&#x60;: publish sell ad; &#x60;1&#x60;: publish buy ad; &#x60;2&#x60;: edit sell ad; &#x60;3&#x60;: edit buy ad. | [default to undefined]
**unitPrice** | **string** | Per-unit price in fixed-price mode. | [default to undefined]
**number** | **string** | Ad amount priced in &#x60;currencyType&#x60;. | [default to undefined]
**payType** | **string** | Payment types enabled for the ad, comma-separated; values can be obtained from &#x60;pay_type&#x60; in the payment method list, e.g. &#x60;bank&#x60;, &#x60;alipay&#x60;, &#x60;wechat&#x60;, &#x60;paypal&#x60;, &#x60;swift&#x60;, &#x60;wu&#x60;. &#x60;pay_type_json&#x60; uses the types in this field as keys to specify the corresponding payment accounts. | [default to undefined]
**payTypeJson** | **string** | JSON string of specific payment accounts corresponding to &#x60;payType&#x60;. Each key is a payment type listed in &#x60;payType&#x60;, and each value is the current user\&#39;s payment method ID for that type. For example, when &#x60;payType&#x60; is &#x60;bank,swift&#x60;, this field can be {\&quot;bank\&quot;:\&quot;10001\&quot;,\&quot;swift\&quot;:\&quot;10002\&quot;}. | [optional] [default to undefined]
**rateFixed** | **string** | Price type: &#x60;0&#x60; floating; &#x60;1&#x60; fixed. | [optional] [default to undefined]
**oid** | **string** | Pass ad ID when editing; omit or empty when publishing a new ad. | [optional] [default to undefined]
**minAmount** | **string** | Minimum quantity per order, denominated by currencyType; required when limitBasis is not passed or is 0 | [optional] [default to undefined]
**maxAmount** | **string** | Maximum quantity per order, denominated by currencyType; required when limitBasis is not passed or is 0 | [optional] [default to undefined]
**limitBasis** | **number** | Trading limit unit. 0: by crypto quantity, 1: by fiat amount; defaults to 0 when not passed for a new ad. The limit unit of an existing ad cannot be changed when editing; a fiat-limit ad must keep passing 1 when edited | [optional] [default to undefined]
**fiatMinAmount** | **string** | Minimum amount per order, denominated by exchangeType; required when limitBasis is 1 | [optional] [default to undefined]
**fiatMaxAmount** | **string** | Maximum amount per order, denominated by exchangeType; required when limitBasis is 1, and must not exceed the total fiat value of the ad quantity converted at the price | [optional] [default to undefined]
**tierLimit** | **string** | Minimum counterparty VIP level; &#x60;0&#x60; means no requirement. | [optional] [default to undefined]
**verifiedLimit** | **string** | Minimum counterparty verification level; &#x60;0&#x60; means no limit. | [optional] [default to undefined]
**regTimeLimit** | **string** | Minimum counterparty account age in days; &#x60;0&#x60; means no limit. | [optional] [default to undefined]
**advertisersLimit** | **string** | Whether trading with the advertiser is restricted. &#x60;0&#x60;: no; &#x60;1&#x60;: yes. | [optional] [default to undefined]
**polymarketLimit** | **number** | Whether to restrict trading with Polymarket users. 0: no restriction, 1: restricted | [optional] [default to undefined]
**expireMin** | **string** | Payment timeout in minutes. | [optional] [default to undefined]
**tradeTips** | **string** | Advertisement trade terms displayed to ordering users; goes through off-platform traffic diversion risk control on submission, and when hit, the advertisement is not saved and code 70305102 is returned | [optional] [default to undefined]
**autoReply** | **string** | Auto reply content after order creation; goes through off-platform traffic diversion risk control on submission, and when hit, the advertisement is not saved and code 70305102 is returned | [optional] [default to undefined]
**minCompletedLimit** | **string** | Minimum completed orders for counterparty; &#x60;-1&#x60; unlimited. | [optional] [default to undefined]
**maxCompletedLimit** | **string** | Maximum completed orders for counterparty; &#x60;-1&#x60; unlimited. | [optional] [default to undefined]
**completedRateLimit** | **string** | Counterparty minimum 30-day completion rate; &#x60;-1&#x60; means no limit. | [optional] [default to undefined]
**userCountryLimit** | **string** | KYC nationality restriction; &#x60;-1&#x60; means no restriction. | [optional] [default to undefined]
**userOrderLimit** | **string** | Maximum concurrent orders allowed for the counterparty. &#x60;-1&#x60;: unlimited. | [optional] [default to undefined]
**rateReferenceId** | **string** | Floating price reference. &#x60;1&#x60;: platform reference; &#x60;2&#x60;: Gate reference; &#x60;3&#x60;: spot reference. | [optional] [default to undefined]
**rateOffset** | **string** | Absolute floating offset ratio, e.g. &#x60;0.5&#x60; means 0.5%. | [optional] [default to undefined]
**floatTrend** | **string** | Floating direction: &#x60;0&#x60; markup; &#x60;1&#x60; markdown. | [optional] [default to undefined]
**teamPaymentUid** | **string** | Team payee UID; optional for non-team merchants. | [optional] [default to undefined]

## Enum: PlaceBizPushOrder.Type

* `_0` (value: `'0'`)

* `_1` (value: `'1'`)

* `_2` (value: `'2'`)

* `_3` (value: `'3'`)


## Enum: PlaceBizPushOrder.LimitBasis

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: PlaceBizPushOrder.PolymarketLimit

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


