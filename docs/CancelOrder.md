# CancelOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **string** | Order ID | [default to undefined]
**reasonId** | **string** | Cancel reason ID. &#x60;1&#x60; no longer want to buy; &#x60;2&#x60; cannot reach seller; &#x60;3&#x60; will not pay; &#x60;4&#x60; seller account not real; &#x60;5&#x60; payout account issue; &#x60;6&#x60; price mismatch; &#x60;7&#x60; mutually agreed cancel; &#x60;8&#x60; poor communication; &#x60;9&#x60; other; &#x60;10&#x60; seller cannot release with refund; &#x60;11&#x60; terms not met; &#x60;12&#x60; seller payout risk-controlled. | [optional] [default to undefined]
**reasonMemo** | **string** | Extra cancel notes when &#x60;reason_id&#x60; is &#x60;9&#x60; or explanation is required. | [optional] [default to undefined]

