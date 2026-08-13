# OtcMarkOrderPaidRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [default to undefined]
**clientOrderId** | **string** | Client order ID (used by some gateway/Inner Pay paths, optional) | [optional] [default to undefined]
**paymentReceiptFileKey** | **string** | User payment receipt: **required**. Stored as a file_key. One file; jpg/jpeg/png/pdf; maximum 10 MB. | [default to undefined]
**paymentReceipt** | **string** | Alias compatible with &#x60;payment_receipt_file_key&#x60; (depends on the gateway\&#39;s external field name) | [optional] [default to undefined]

