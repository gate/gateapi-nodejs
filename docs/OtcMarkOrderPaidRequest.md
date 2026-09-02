# OtcMarkOrderPaidRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [default to undefined]
**clientOrderId** | **string** | Client order ID (used by some gateway/Inner Pay paths, optional) | [optional] [default to undefined]
**paymentReceiptFileKey** | **string** | User payment receipt: **required**. Recommended: call &#x60;POST /otc/upload/pre_upload&#x60; (&#x60;scene&#x3D;general&#x60;) to upload to the temporary bucket, then pass the returned **base64 file_key unchanged** (do not decode); the server moves to the production bucket and persists. Still compatible with legacy production-bucket base64 keys. Single file; jpg/jpeg/png/pdf; ≤10MB. | [default to undefined]
**paymentReceipt** | **string** | Alias compatible with &#x60;payment_receipt_file_key&#x60; (depends on the gateway\&#39;s external field name) | [optional] [default to undefined]

