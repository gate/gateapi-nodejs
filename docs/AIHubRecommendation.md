# AIHubRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendationId** | **string** |  | [default to undefined]
**market** | **string** |  | [default to undefined]
**strategyType** | [**StrategyType**](StrategyType.md) |  | [default to undefined]
**strategyName** | **string** |  | [default to undefined]
**backtestApr** | **string** |  | [optional] [default to undefined]
**maxDrawdown** | **string** |  | [optional] [default to undefined]
**summary** | **string** |  | [default to undefined]
**strategyParamsPreview** | **string** | Recommended-parameter preview as JSON text (string-encoded so clients deserialize it consistently). The value is a serialized JSON object whose structure varies by strategy type; callers or upper-layer models must parse it. | [optional] [default to undefined]

