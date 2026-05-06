# P2pChatListResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**Array&lt;P2pChatMessage&gt;**](P2pChatMessage.md) | Message List | [optional] [default to undefined]
**memo** | **string** | Payment tip (displayed on homepage only) | [optional] [default to undefined]
**hasHistory** | **boolean** | Whether historical records exist | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**sRVTM** | **number** | Timestamp of the latest message. | [optional] [default to undefined]
**orderStatus** | **string** | Raw order status in DB; typical values: &#x60;OPEN&#x60;, &#x60;PAID&#x60;, &#x60;LOCKED&#x60;, &#x60;ACCEPT&#x60;, &#x60;BCLOSED&#x60;, &#x60;CANCEL&#x60;, &#x60;BECANCEL&#x60;, &#x60;SCLOSED&#x60;, &#x60;SCANCEL&#x60;. | [optional] [default to undefined]

