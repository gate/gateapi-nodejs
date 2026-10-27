# AutoInvestPlanDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number &#124; bigint** | Plan ID | [default to undefined]
**version** | **number &#124; bigint** | PlanVersion | [optional] [default to undefined]
**name** | **string** | Plan name | [default to undefined]
**createTime** | **number &#124; bigint** | Creation time (Unix timestamp) | [default to undefined]
**updateTime** | **number &#124; bigint** | Update time (Unix timestamp) | [default to undefined]
**userId** | **number &#124; bigint** | User ID | [default to undefined]
**money** | **string** | Quote Currency | [default to undefined]
**amount** | **string** | Per PeriodInvestment amount | [default to undefined]
**periodType** | **string** | Cycle type（e.g., monthly） | [default to undefined]
**periodDay** | **number &#124; bigint** | Cycle day | [default to undefined]
**periodHour** | **number &#124; bigint** | CycleHours | [default to undefined]
**portfolio** | [**Array<AutoInvestPortfolioItem>**](AutoInvestPortfolioItem.md) | Portfolio | [default to undefined]
**nextTime** | **number &#124; bigint** | Next execution time (Unix timestamp) | [default to undefined]
**period** | **number &#124; bigint** | Executed periods | [default to undefined]
**fundSource** | **string** | Fund source（spot/earn） | [default to undefined]
**fundFlow** | **string** | Fund flow direction (auto_invest/earn) | [default to undefined]

