# PositionHistoryListDataList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**positionId** | **number** | Position ID | [default to undefined]
**symbol** | **string** | Market / Trading symbol | [default to undefined]
**realizedPnl** | **string** | Realized PnL | [default to undefined]
**realizedPnlRate** | **string** | Realized return rate | [optional] [default to undefined]
**volume** | **string** | Position size / Maximum position size | [default to undefined]
**volumeClosed** | **string** | Close volume | [default to undefined]
**priceOpen** | **string** | Average Opening Price | [default to undefined]
**positionDir** | **string** | Position Direction - Long: Long Position - Short: Short Position | [default to undefined]
**priceTp** | **string** | Take profit price | [optional] [default to undefined]
**priceSl** | **string** | Stop loss price | [optional] [default to undefined]
**counterpartyPrice** | **string** | Counterparty price | [optional] [default to undefined]
**closePrice** | **string** | Close price | [default to undefined]
**timeCreate** | **string** | Open time (timestamp in seconds) | [default to undefined]
**timeClose** | **string** | Close time (timestamp in seconds) | [default to undefined]
**positionStatus** | **string** | Position Status - 1: Fully Closed - 2: Forced Liquidation | [default to undefined]
**closeDetail** | [**PositionHistoryListDataCloseDetail**](PositionHistoryListDataCloseDetail.md) |  | [optional] [default to undefined]
**realizedPnlDetail** | [**PositionHistoryListDataRealizedPnlDetail**](PositionHistoryListDataRealizedPnlDetail.md) |  | [default to undefined]

## Enum: PositionHistoryListDataList.PositionDir

* `Long` (value: `'Long'`)

* `Short` (value: `'Short'`)


