# DeliveryOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Futures order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time of order | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Order finished time. Not returned if order is open | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How the order was finished:  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is &#x60;IOC&#x60;, finish immediately - auto_deleveraged: finished by ADL - reduce_only: cancelled because of increasing position while &#x60;reduce-only&#x60; set - position_closed: cancelled because the position was closed - reduce_out: only reduce positions by excluding hard-to-fill orders - stp: cancelled because self trade prevention | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: Pending - &#x60;finished&#x60;: Completed | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [default to undefined]
**size** | **number** | Required. Trading quantity. Positive for buy, negative for sell. Set to 0 for close position orders. | [default to undefined]
**iceberg** | **number** | Display size for iceberg orders. 0 for non-iceberg orders. Note that hidden portions are charged taker fees. | [optional] [default to undefined]
**price** | **string** | Order price. Price of 0 with &#x60;tif&#x60; set to &#x60;ioc&#x60; represents a market order. | [optional] [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee - fok: FillOrKill, fill either completely or none | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Unfilled quantity | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price | [optional] [readonly] [default to undefined]
**text** | **string** | 订单自定义信息，用户可以用该字段设置自定义 ID，用户自定义字段必须满足以下条件：  1. 必须以 &#x60;t-&#x60; 开头 2. 不计算 &#x60;t-&#x60; ，长度不能超过 28 字节 3. 输入内容只能包含数字、字母、下划线(_)、中划线(-) 或者点(.)  除用户自定义信息以外，以下为内部保留字段，标识订单来源:  - web: 网页 - api: API 调用 - app: 移动端 - auto_deleveraging: 自动减仓 - liquidation: ⽼经典模式仓位强制平仓 - liq-xxx: a. 新经典模式仓位强制平仓，包含逐仓、单向全仓、双向全仓⾮对冲仓位强平。 b. 统⼀账户单币种保证金模式逐仓强制平仓 - hedge-liq-xxx: 新经典模式双向全仓对冲部分强制平仓，即同时平多空仓位 - pm_liquidate: 统⼀账户跨币种保证金模式强制平仓 - comb_margin_liquidate: 统⼀账户组合保证金模式强制平仓 - scm_liquidate: 统⼀账户单币种保证金模式仓位强制平仓 - insurance: 保险 | [optional] [default to undefined]
**tkfr** | **string** | Taker fee | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee | [optional] [readonly] [default to undefined]
**refu** | **number** | Referrer user ID | [optional] [readonly] [default to undefined]
**autoSize** | **string** | Set side to close dual-mode position. &#x60;close_long&#x60; closes the long side; while &#x60;close_short&#x60; the short one. Note &#x60;size&#x60; also needs to be set to 0 | [optional] [default to undefined]
**stpId** | **number** | Orders between users in the same &#x60;stp_id&#x60; group are not allowed to be self-traded  1. If the &#x60;stp_id&#x60; of two orders being matched is non-zero and equal, they will not be executed. Instead, the corresponding strategy will be executed based on the &#x60;stp_act&#x60; of the taker. 2. &#x60;stp_id&#x60; returns &#x60;0&#x60; by default for orders that have not been set for &#x60;STP group&#x60; | [optional] [readonly] [default to undefined]
**stpAct** | **string** | Self-Trading Prevention Action. Users can use this field to set self-trade prevention strategies  1. After users join the &#x60;STP Group&#x60;, they can pass &#x60;stp_act&#x60; to limit the user\&#39;s self-trade prevention strategy. If &#x60;stp_act&#x60; is not passed, the default is &#x60;cn&#x60; strategy. 2. When the user does not join the &#x60;STP group&#x60;, an error will be returned when passing the &#x60;stp_act&#x60; parameter. 3. If the user did not use &#x60;stp_act&#x60; when placing the order, &#x60;stp_act&#x60; will return \&#39;-\&#39;  - cn: Cancel newest, cancel new orders and keep old ones - co: Cancel oldest, cancel old orders and keep new ones - cb: Cancel both, both old and new orders will be cancelled | [optional] [default to undefined]
**amendText** | **string** | The custom data that the user remarked when amending the order | [optional] [readonly] [default to undefined]

## Enum: DeliveryOrder.FinishAs

* `Filled` (value: `'filled'`)

* `Cancelled` (value: `'cancelled'`)

* `Liquidated` (value: `'liquidated'`)

* `Ioc` (value: `'ioc'`)

* `AutoDeleveraged` (value: `'auto_deleveraged'`)

* `ReduceOnly` (value: `'reduce_only'`)

* `PositionClosed` (value: `'position_closed'`)

* `ReduceOut` (value: `'reduce_out'`)

* `Stp` (value: `'stp'`)


## Enum: DeliveryOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


## Enum: DeliveryOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)

* `Fok` (value: `'fok'`)


## Enum: DeliveryOrder.AutoSize

* `Long` (value: `'close_long'`)

* `Short` (value: `'close_short'`)


## Enum: DeliveryOrder.StpAct

* `Co` (value: `'co'`)

* `Cn` (value: `'cn'`)

* `Cb` (value: `'cb'`)

* `Minus` (value: `'-'`)


