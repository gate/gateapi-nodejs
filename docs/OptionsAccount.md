# OptionsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [default to undefined]
**total** | **string** | Account balance, invalid for unified account | [optional] [default to undefined]
**positionValue** | **string** | Position value, long position value is positive, short position value is negative | [optional] [default to undefined]
**equity** | **string** | Account equity &#x3D; balance + option position value, invalid for unified account | [optional] [default to undefined]
**shortEnabled** | **boolean** | If the account is allowed to short | [optional] [default to undefined]
**mmpEnabled** | **boolean** | Whether to enable MMP | [optional] [default to undefined]
**liqTriggered** | **boolean** | Whether the account is in a liquidation state | [optional] [default to undefined]
**marginMode** | **number** | This field indicates the margin mode used by the unified account:  - 0: Classic Spot Margin Mode - 1: Cross-Currency Margin Mode - 2: Portfolio Margin Mode - 3: Single-Currency Margin Mode | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealised PnL &#x3D; (mark price - entry price) * position size. For long postion, size is positive; for short positon, size is negative.This value is for reference only. | [optional] [default to undefined]
**initMargin** | **string** | Initial position margin | [optional] [default to undefined]
**maintMargin** | **string** | Position maintenance margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**askOrderMargin** | **string** | Margin for outstanding sell orders | [optional] [default to undefined]
**bidOrderMargin** | **string** | Margin for outstanding buy orders | [optional] [default to undefined]
**available** | **string** | Available balance to transfer out or trade | [optional] [default to undefined]
**point** | **string** | Point card amount | [optional] [default to undefined]
**currency** | **string** | Settlement currency | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of outstanding orders | [optional] [default to undefined]
**positionNotionalLimit** | **number** | Notional value upper limit, including the nominal value of positions and outstanding orders | [optional] [default to undefined]

## Enum: OptionsAccount.MarginMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


