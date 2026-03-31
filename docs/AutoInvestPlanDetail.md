# AutoInvestPlanDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Plan ID | [default to undefined]
**version** | **number** | PlanVersion | [optional] [default to undefined]
**name** | **string** | Plan name | [default to undefined]
**createTime** | **number** | Creation time (Unix timestamp) | [default to undefined]
**updateTime** | **number** | Update time (Unix timestamp) | [default to undefined]
**userId** | **number** | User ID | [default to undefined]
**money** | **string** | Quote Currency | [default to undefined]
**amount** | **string** | Per PeriodInvestment amount | [default to undefined]
**periodType** | **string** | Cycle type（e.g., monthly） | [default to undefined]
**periodDay** | **number** | Cycle day | [default to undefined]
**periodHour** | **number** | CycleHours | [default to undefined]
**portfolio** | [**Array&lt;AutoInvestPortfolioItem&gt;**](AutoInvestPortfolioItem.md) | InvestmentPortfolio | [default to undefined]
**nextTime** | **number** | Next execution time (Unix timestamp) | [default to undefined]
**period** | **number** | Executed periods | [default to undefined]
**fundSource** | **string** | Fund source（spot/earn） | [default to undefined]
**fundFlow** | **string** | Fund flow direction (auto_invest/earn) | [default to undefined]

