# FuturesBBOOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract | [default to undefined]
**size** | **number** | Required. Trading quantity. Positive for buy, negative for sell. Set to 0 for close position orders. | [default to undefined]
**direction** | **string** | Direction: \&#39;sell\&#39; fetches the bid side, \&#39;buy\&#39; fetches the ask side. | [default to undefined]
**iceberg** | **number** | Display size for iceberg orders. 0 for non-iceberg orders. Note that hidden portions are charged taker fees. | [optional] [default to undefined]
**level** | **number** | Level: maximum 20 levels | [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee - fok: FillOrKill, fill either completely or none | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Unfilled quantity | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price | [optional] [readonly] [default to undefined]
**text** | **string** | Order Custom Information: Users can set custom IDs via this field. Custom fields must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. Excluding &#x60;t-&#x60;, length cannot exceed 28 bytes 3. Content can only contain numbers, letters, underscores (_), hyphens (-), or dots (.)  In addition to user custom information, the following are internal reserved fields identifying order sources:  - web: Web - api: API Call - app: Mobile App - auto_deleveraging: Auto-Deleveraging - liquidation: Forced Liquidation of Legacy Classic Mode Positions - liq-xxx: a. Forced liquidation of New Classic Mode positions, including isolated margin, single-direction cross margin, and non-hedged dual-direction cross margin positions. b. Forced liquidation of isolated margin positions in Unified Account Single-Currency Margin Mode - hedge-liq-xxx: Forced liquidation of hedged portions in New Classic Mode dual-direction cross margin (simultaneous closing of long and short positions) - pm_liquidate: Forced liquidation in Unified Account Cross-Currency Margin Mode - comb_margin_liquidate: Forced liquidation in Unified Account Portfolio Margin Mode - scm_liquidate: Forced liquidation of positions in Unified Account Single-Currency Margin Mode - insurance: Insurance | [optional] [default to undefined]
**tkfr** | **string** | Taker fee | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee | [optional] [readonly] [default to undefined]
**refu** | **number** | Referrer user ID | [optional] [readonly] [default to undefined]
**autoSize** | **string** | Set side to close dual-mode position. &#x60;close_long&#x60; closes the long side; while &#x60;close_short&#x60; the short one. Note &#x60;size&#x60; also needs to be set to 0 | [optional] [default to undefined]
**stpId** | **number** | Orders between users in the same &#x60;stp_id&#x60; group are not allowed to be self-traded  1. If the &#x60;stp_id&#x60; of two orders being matched is non-zero and equal, they will not be executed. Instead, the corresponding strategy will be executed based on the &#x60;stp_act&#x60; of the taker. 2. &#x60;stp_id&#x60; returns &#x60;0&#x60; by default for orders that have not been set for &#x60;STP group&#x60; | [optional] [readonly] [default to undefined]
**stpAct** | **string** | Self-Trading Prevention Action. Users can use this field to set self-trade prevention strategies  1. After users join the &#x60;STP Group&#x60;, they can pass &#x60;stp_act&#x60; to limit the user\&#39;s self-trade prevention strategy. If &#x60;stp_act&#x60; is not passed, the default is &#x60;cn&#x60; strategy. 2. When the user does not join the &#x60;STP group&#x60;, an error will be returned when passing the &#x60;stp_act&#x60; parameter. 3. If the user did not use &#x60;stp_act&#x60; when placing the order, &#x60;stp_act&#x60; will return \&#39;-\&#39;  - cn: Cancel newest, cancel new orders and keep old ones - co: Cancel oldest, cancel old orders and keep new ones - cb: Cancel both, both old and new orders will be cancelled | [optional] [default to undefined]
**amendText** | **string** | The custom data that the user remarked when amending the order | [optional] [readonly] [default to undefined]
**limitVip** | **number** | Counterparty user\&#39;s VIP level for limit order fills. Current order will only match with orders whose VIP level is less than or equal to the specified level. Only 11~16 are supported; default is 0 | [optional] [default to undefined]
**pid** | **number** | Position ID | [optional] [default to undefined]

## Enum: FuturesBBOOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)

* `Fok` (value: `'fok'`)


## Enum: FuturesBBOOrder.AutoSize

* `Long` (value: `'close_long'`)

* `Short` (value: `'close_short'`)


## Enum: FuturesBBOOrder.StpAct

* `Co` (value: `'co'`)

* `Cn` (value: `'cn'`)

* `Cb` (value: `'cb'`)

* `Minus` (value: `'-'`)


