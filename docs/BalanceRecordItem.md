# BalanceRecordItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **bigint** | Balance record primary key ID | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**change** | **string** | Cash amount change. Positive values are credits; negative values are debits. | [optional] [default to undefined]
**balance** | **string** | Cash balance snapshot after the change | [optional] [default to undefined]
**stockChange** | **string** | Stock quantity change, parsed from detail.amount for stock quantity records; may be an empty string for other records | [optional] [default to undefined]
**type** | **string** | Raw record type. Common values include: - deposit: Funds transferred in. - withdraw: Funds transferred out. - fee: Trading fee. - dividend: Dividend payment. - sell: Proceeds from selling stocks. - buy: Payment for buying stocks. - award: Airdrop reward. - stock_transfer_in: Stocks transferred in. - stock_transfer_out: Stocks transferred out. | [optional] [default to undefined]
**business** | **string** | Business identifier | [optional] [default to undefined]
**businessId** | **bigint** | Related business ID | [optional] [default to undefined]
**symbol** | **string** | Symbol | [optional] [default to undefined]
**detail** | **string** | Raw business details as a JSON string; returned only when include_detail&#x3D;true is requested | [optional] [default to undefined]
**version** | **number** | Record version | [optional] [default to undefined]
**timeCreate** | **number &#124; bigint** | Business event time (Unix timestamp in seconds) | [optional] [default to undefined]
**createTime** | **number &#124; bigint** | Record creation time (Unix timestamp in seconds) | [optional] [default to undefined]

