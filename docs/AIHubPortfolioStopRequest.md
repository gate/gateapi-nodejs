# AIHubPortfolioStopRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyId** | **string** |  | [default to undefined]
**strategyType** | [**StrategyType**](StrategyType.md) |  | [default to undefined]
**stopMode** | **AIHubPortfolioStopRequest.StopMode** | Required only for smart_position. Other types reject custom exit options. | [optional] [default to undefined]
**stopOptions** | [**AIHubRebalanceStopOptions**](AIHubRebalanceStopOptions.md) |  | [optional] [default to undefined]

## Enum: AIHubPortfolioStopRequest.StopMode

* `Market` (value: `'market'`)

* `Limit` (value: `'limit'`)

* `NoClose` (value: `'no_close'`)


