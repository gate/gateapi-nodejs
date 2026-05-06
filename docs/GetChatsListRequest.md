# GetChatsListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **number** | Order ID; omit or &#x60;0&#x60; to return the latest order with chat for the user. | [optional] [default to undefined]
**lastreceived** | **number** | Timestamp of the last received message for backward incremental fetch; omit on first load. | [optional] [default to undefined]
**firstreceived** | **number** | Timestamp of first received message for paging backward; omit on first load. | [optional] [default to undefined]

