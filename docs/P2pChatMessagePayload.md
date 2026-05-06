# P2pChatMessagePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Order status when sending a message. Typical values: &#x60;OPEN&#x60;, &#x60;PAID&#x60;, &#x60;LOCKED&#x60;, &#x60;ACCEPT&#x60;, &#x60;BCLOSED&#x60;, &#x60;CANCEL&#x60;, &#x60;BECANCEL&#x60;, &#x60;SCLOSED&#x60;, &#x60;SCANCEL&#x60;. | [optional] [default to undefined]
**text** | **string** | Message content | [optional] [default to undefined]
**paymentVoucher** | **Array&lt;string&gt;** | Payment voucher | [optional] [default to undefined]
**reasonId** | **number** | Cancel reason ID. &#x60;1&#x60; no longer want to buy; &#x60;2&#x60; cannot reach seller; &#x60;3&#x60; will not pay; &#x60;4&#x60; seller account not real; &#x60;5&#x60; payout account issue; &#x60;6&#x60; price mismatch; &#x60;7&#x60; mutually agreed cancel; &#x60;8&#x60; poor communication; &#x60;9&#x60; other; &#x60;10&#x60; seller cannot release with refund; &#x60;11&#x60; terms not met; &#x60;12&#x60; seller payout risk-controlled. | [optional] [default to undefined]
**toastId** | **number** | Cancellation reason popup | [optional] [default to undefined]
**reasonMemo** | **string** | Cancel reason description. | [optional] [default to undefined]
**cancelTime** | **number** | Cancellation time | [optional] [default to undefined]
**sellerConfirm** | **number** | Seller confirmation of cancel reason: &#x60;0&#x60; pending; &#x60;1&#x60; confirmed; &#x60;2&#x60; rejected. | [optional] [default to undefined]
**id** | **string** | Payment method information ID | [optional] [default to undefined]
**accountDes** | **string** | Payment method description | [optional] [default to undefined]
**payType** | **string** | Payment method type | [optional] [default to undefined]
**file** | **string** | Payment method file link | [optional] [default to undefined]
**fileKey** | **string** | Payment method file key | [optional] [default to undefined]
**account** | **string** | Payment account or masked payment account. | [optional] [default to undefined]
**memo** | **string** | Payment method note | [optional] [default to undefined]
**code** | **string** | Payment method code | [optional] [default to undefined]
**memoExt** | **string** | Payment method additional note | [optional] [default to undefined]
**tradeTips** | **string** | Payment method tip | [optional] [default to undefined]
**realName** | **string** | Payment method username | [optional] [default to undefined]
**isDelete** | **number** | Whether the payment method was deleted. &#x60;1&#x60;: deleted; &#x60;0&#x60;: not deleted. | [optional] [default to undefined]
**payName** | **string** | Payment method full name | [optional] [default to undefined]

