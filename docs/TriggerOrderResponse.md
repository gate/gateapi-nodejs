# TriggerOrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Auto order ID | [optional] [default to undefined]
**idString** | **string** | String form of the auto order ID; the same order as numeric &#x60;id&#x60;, as the decimal string of &#x60;id&#x60; to avoid int64 precision loss in JavaScript and similar environments. Prefer this field to display the order ID or when a string unique identifier is needed; one-to-one with &#x60;id&#x60;. Same meaning as the field of the same name in futures price-trigger REST APIs and in &#x60;futures.orders&#x60; / &#x60;futures.autoorders&#x60; WebSocket pushes. | [optional] [readonly] [default to undefined]

