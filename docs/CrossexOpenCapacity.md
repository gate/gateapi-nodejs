# CrossexOpenCapacity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Futures trading pair | [default to undefined]
**positionSide** | **CrossexOpenCapacity.PositionSide** | Position side (LONG for long positions / SHORT for short positions) | [default to undefined]
**availableToOpenNotional** | **BigNumber** | Current maximum remaining opening notional value for the position side; 0 means no position can currently be opened | [default to undefined]

## Enum: CrossexOpenCapacity.PositionSide

* `LONG` (value: `'LONG'`)

* `SHORT` (value: `'SHORT'`)


