# AccountTransferDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txId** | **string** | Transfer transaction ID | [readonly] [default to undefined]
**status** | **AccountTransferDetail.Status** | Transfer status:  - &#x60;pending&#x60;: Processing - &#x60;success&#x60;: Successful - &#x60;fail&#x60;: Failed | [readonly] [default to undefined]
**currency** | **string** | Transfer currency | [readonly] [default to undefined]
**amount** | **string** | Transfer amount | [readonly] [default to undefined]
**fromAccount** | **AccountTransferDetail.FromAccount** | Source account type:  - &#x60;spot&#x60;: Spot account - &#x60;margin&#x60;: Margin account - &#x60;futures&#x60;: Perpetual futures account - &#x60;delivery&#x60;: Delivery futures account - &#x60;options&#x60;: Options account - &#x60;unknown&#x60;: Unrecognized account type | [readonly] [default to undefined]
**toAccount** | **AccountTransferDetail.ToAccount** | Destination account type:  - &#x60;spot&#x60;: Spot account - &#x60;margin&#x60;: Margin account - &#x60;futures&#x60;: Perpetual futures account - &#x60;delivery&#x60;: Delivery futures account - &#x60;options&#x60;: Options account - &#x60;unknown&#x60;: Unrecognized account type | [readonly] [default to undefined]
**settle** | **string &#124; null** | Settlement currency for futures, delivery, and options transfers; otherwise, null | [readonly] [default to undefined]
**currencyPair** | **string &#124; null** | Currency pair for margin transfers; otherwise, null | [readonly] [default to undefined]

## Enum: AccountTransferDetail.Status

* `Pending` (value: `'pending'`)

* `Success` (value: `'success'`)

* `Fail` (value: `'fail'`)


## Enum: AccountTransferDetail.FromAccount

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `Options` (value: `'options'`)

* `Unknown` (value: `'unknown'`)


## Enum: AccountTransferDetail.ToAccount

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `Options` (value: `'options'`)

* `Unknown` (value: `'unknown'`)


