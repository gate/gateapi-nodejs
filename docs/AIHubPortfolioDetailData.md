# AIHubPortfolioDetailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyId** | **string** |  | [default to undefined]
**strategyType** | [**StrategyType**](StrategyType.md) |  | [default to undefined]
**market** | **string** | Single market, or empty string for a portfolio; use assets/markets for the latter. | [default to undefined]
**status** | **string** |  | [default to undefined]
**baseInfo** | [**AIHubPortfolioBaseInfo**](AIHubPortfolioBaseInfo.md) |  | [default to undefined]
**metrics** | [**AIHubPortfolioMetrics**](AIHubPortfolioMetrics.md) |  | [default to undefined]
**position** | [**AIHubPortfolioPosition &#124; null**](AIHubPortfolioPosition.md) |  | [optional] [default to undefined]
**stopSupported** | **boolean** |  | [default to undefined]
**assets** | **Array<string>** |  | [optional] [default to undefined]
**markets** | **Array<string>** |  | [optional] [default to undefined]
**positions** | [**Array<AIHubPortfolioAssetPosition>**](AIHubPortfolioAssetPosition.md) |  | [optional] [default to undefined]
**positionsStatus** | **AIHubPortfolioDetailData.PositionsStatus** |  | [optional] [default to undefined]
**configuration** | [**object**](.md) | Product-specific saved configuration. spot_martingale exposes AIHubSpotMartingaleConfiguration; absence is unverified. Runtime recovery internals are excluded. | [optional] [default to undefined]
**stopProgress** | [**AIHubStopProgress**](AIHubStopProgress.md) |  | [optional] [default to undefined]

## Enum: AIHubPortfolioDetailData.PositionsStatus

* `Verified` (value: `'verified'`)

* `Partial` (value: `'partial'`)

* `Unverified` (value: `'unverified'`)

* `Historical` (value: `'historical'`)


