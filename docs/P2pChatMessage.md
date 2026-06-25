# P2pChatMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isSell** | **number** | Whether the current user is the seller. &#x60;1&#x60;: yes; &#x60;0&#x60;: no. | [optional] [default to undefined]
**msgType** | **number** | Message type: &#x60;0&#x60; text; &#x60;1&#x60; file; &#x60;2&#x60; template; &#x60;3&#x60; order-share; &#x60;4&#x60; payment-share; &#x60;5&#x60; status update. | [optional] [default to undefined]
**msg** | **string** | Message content; for file messages, usually URL or file key. | [optional] [default to undefined]
**username** | **string** | Message sender username | [optional] [default to undefined]
**timest** | **number** | Message timestamp | [optional] [default to undefined]
**msgObj** | [**P2pChatMessagePayload**](P2pChatMessagePayload.md) |  | [optional] [default to undefined]
**uid** | **string** | Sender\&#39;s crypto UID; system messages may use &#x60;System&#x60; or an empty string. | [optional] [default to undefined]
**type** | **number** | Display type: &#x60;1&#x60; file message; &#x60;2&#x60; system message. | [optional] [default to undefined]
**pic** | **string** | File link | [optional] [default to undefined]
**fileKey** | **string** | File key | [optional] [default to undefined]
**fileType** | **string** | File type: &#x60;image&#x60; for images, &#x60;video&#x60; for videos. | [optional] [default to undefined]
**riskType** | **number** | Risk control display type. 1: off-platform traffic diversion risk; returned when a text message hits risk control | [optional] [default to undefined]
**toastMsg** | **string** | Risk control prompt message; returned only when risk_type&#x3D;1 | [optional] [default to undefined]

## Enum: P2pChatMessage.RiskType

* `NUMBER_1` (value: `1`)


