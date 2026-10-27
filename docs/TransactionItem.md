# TransactionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Asset | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**symbolDisplay** | **string** | Symbol display name | [optional] [default to undefined]
**type** | **TransactionItem.Type** | Transaction type. - deposit: Funds transfer in. - withdraw: Funds transfer out. - fee: Trading fee. - dividend: Dividend payout. - sell: Stock sale credit. - buy: Stock purchase debit. - award: Airdrop reward. - stock_transfer_in: Stock transfer in. - stock_transfer_out: Stock transfer out. | [optional] [default to undefined]
**typeDesc** | **string** | Transaction type description | [optional] [default to undefined]
**change** | **string** | Change amount. A positive value means a credit, and a negative value means a debit. | [optional] [default to undefined]
**balance** | **string** | Balance after change | [optional] [default to undefined]
**refId** | **string** | Business idempotent ID | [optional] [default to undefined]
**time** | **number &#124; bigint** | Unix timestamp (seconds) | [optional] [default to undefined]
**unitText** | **string** | Unit display text | [optional] [default to undefined]
**detail** | **{ [key: string]: any; }** | Business details | [optional] [default to undefined]

## Enum: TransactionItem.Type

* `Deposit` (value: `'deposit'`)

* `Withdraw` (value: `'withdraw'`)

* `Fee` (value: `'fee'`)

* `Dividend` (value: `'dividend'`)

* `Sell` (value: `'sell'`)

* `Buy` (value: `'buy'`)

* `Award` (value: `'award'`)

* `StockTransferIn` (value: `'stock_transfer_in'`)

* `StockTransferOut` (value: `'stock_transfer_out'`)


