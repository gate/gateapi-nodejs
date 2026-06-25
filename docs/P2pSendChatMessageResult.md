# P2pSendChatMessageResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sRVTM** | **number** | Timestamp when message was successfully sent (current timestamp) | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**conversationId** | **string** | Chat ID, formatted as both parties\&#39; UIDs concatenated in ascending order | [optional] [default to undefined]
**msgType** | **number** | Message content type when risk control is hit. 0: text | [optional] [default to undefined]
**riskType** | **number** | Risk control display type. 1: off-platform traffic diversion risk; returned only when risk control is hit | [optional] [default to undefined]
**toastMsg** | **string** | Risk control prompt message; returned only when risk_type&#x3D;1 | [optional] [default to undefined]

## Enum: P2pSendChatMessageResult.MsgType

* `NUMBER_0` (value: `0`)


## Enum: P2pSendChatMessageResult.RiskType

* `NUMBER_1` (value: `1`)


