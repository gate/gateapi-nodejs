# OrderDealItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **bigint** | Trade record primary key ID | [optional] [default to undefined]
**dealId** | **bigint** | Trade ID | [optional] [default to undefined]
**orderId** | **bigint** | Order ID | [optional] [default to undefined]
**clientOrderId** | **string** | Client-defined order ID | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**exchange** | **OrderDealItem.Exchange** | Exchange. - us: US stocks. - hk: Hong Kong stocks. - kr: Korean stocks. - jp: Japanese stocks. | [optional] [default to undefined]
**side** | **OrderDealItem.Side** | Side (1&#x3D;sell, 2&#x3D;buy) | [optional] [default to undefined]
**role** | **OrderDealItem.Role** | Liquidity role. - maker: Maker. - taker: Taker. | [optional] [default to undefined]
**price** | **string** | Trade price in the instrument trading currency | [optional] [default to undefined]
**quantity** | **string** | Trading size | [optional] [default to undefined]
**positionQty** | **string** | Position quantity after the trade | [optional] [default to undefined]
**avgEntryPrice** | **string** | Average entry price | [optional] [default to undefined]
**value** | **string** | Trade value in the instrument trading currency | [optional] [default to undefined]
**fxRate** | **string** | Quote currency to USD exchange rate | [optional] [default to undefined]
**fee** | **string** | Fee in the instrument trading currency | [optional] [default to undefined]

## Enum: OrderDealItem.Exchange

* `Us` (value: `'us'`)

* `Hk` (value: `'hk'`)

* `Kr` (value: `'kr'`)

* `Jp` (value: `'jp'`)


## Enum: OrderDealItem.Side

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: OrderDealItem.Role

* `Maker` (value: `'maker'`)

* `Taker` (value: `'taker'`)


