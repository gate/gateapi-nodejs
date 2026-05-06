# SendChatMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **number** | Order ID | [default to undefined]
**type** | **number** | Message type: &#x60;0&#x60; text; &#x60;1&#x60; file (image or video); defaults to &#x60;0&#x60;. | [optional] [default to undefined]
**message** | **string** | Message body. For &#x60;type&#x3D;0&#x60;, plain text up to 500 characters; for &#x60;type&#x3D;1&#x60;, pass the &#x60;file_key&#x60; returned by &#x60;upload_chat_file&#x60;. | [default to undefined]

## Enum: SendChatMessageRequest.Type

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


