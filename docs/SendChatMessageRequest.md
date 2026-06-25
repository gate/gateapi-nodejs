# SendChatMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **number** | Order ID | [default to undefined]
**type** | **number** | Message type: &#x60;0&#x60; text; &#x60;1&#x60; file (image or video); defaults to &#x60;0&#x60;. | [optional] [default to undefined]
**message** | **string** | Message content. When type&#x3D;0, pass text up to 500 characters, which goes through off-platform traffic diversion risk control; when hit, the response contains risk_type&#x3D;1 and toast_msg. When type&#x3D;1, pass the file_key returned by upload_chat_file | [default to undefined]

## Enum: SendChatMessageRequest.Type

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


