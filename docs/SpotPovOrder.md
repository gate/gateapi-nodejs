# SpotPovOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order ID | [readonly] [default to undefined]
**currencyPair** | **string** | Currency pair | [readonly] [default to undefined]
**side** | **string** | Buy or sell order | [readonly] [default to undefined]
**amount** | **string** | Trade amount | [readonly] [default to undefined]
**participationRate** | **number** | Target participation rate as a percentage. Allowed values: 5, 10, 20, and 40 | [readonly] [default to undefined]
**ttl** | **string** | Time to live. Valid values: 1h, 6h, 12h, 1d, 2d, 3d, 4d, 5d, 6d, and 7d | [readonly] [default to undefined]
**limitPrice** | **string** | Limit price. If omitted, the market price is used | [optional] [readonly] [default to undefined]
**triggerPrice** | **string** | Trigger price. If omitted, the order is triggered immediately | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - CREATED: Created - CANCELING: Canceling - RUNNING: Running - COMPLETED: Completed - EXPIRED: Expired - TERMINATED: Terminated | [readonly] [default to undefined]
**terminatedAs** | **string** | Order termination reason code | [optional] [readonly] [default to undefined]
**startTimeMs** | **number** | Order execution start time in milliseconds | [optional] [readonly] [default to undefined]
**endTimeMs** | **number** | Order execution end time in milliseconds | [optional] [readonly] [default to undefined]
**expireTimeMs** | **number** | Order expiration time in milliseconds | [optional] [readonly] [default to undefined]
**createTimeMs** | **number** | Creation time of order (in milliseconds) | [readonly] [default to undefined]
**updateTimeMs** | **number** | Last modification time of order (in milliseconds) | [optional] [readonly] [default to undefined]
**text** | **string** | Order custom information. Users can set custom ID with this field. Custom fields must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. Excluding &#x60;t-&#x60;, length cannot exceed 28 bytes 3. Can only contain numbers, letters, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]

