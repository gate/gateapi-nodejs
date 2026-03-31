# AutoInvestPlanCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planName** | **string** | Plan name。Length: 0-50 characters | [optional] [default to undefined]
**planDes** | **string** | Plan description | [optional] [default to undefined]
**planMoney** | **string** | Pricing currency，SupportUSDT，BTC | [default to undefined]
**planAmount** | **string** | Per PeriodAuto InvestAmount，Must &gt; 0，and not exceedThePricing currencyConfigurationSingleMaximumAmount | [default to undefined]
**planPeriodType** | **string** | Enum: daily, weekly, biweekly, monthly, hourly, 4-hourly | [default to undefined]
**planPeriodDay** | **number** | Cycle day. For monthly: day of month (1-30); For weekly/biweekly: day of week (1-7, 1&#x3D;Monday); For daily/hourly/4-hourly: ignored | [default to undefined]
**planPeriodHour** | **number** | Execution hourAuto Invest 0-23 | [default to undefined]
**items** | [**Array&lt;AutoInvestPlanCreateItems&gt;**](AutoInvestPlanCreateItems.md) | Investment portfolio, asset cannot be repeated; Sum of all items\&#39; ratios must be 100 | [default to undefined]
**fundSource** | **string** | Fund source: spot or earn, default: spot | [optional] [default to undefined]
**fundFlow** | **string** | Fund flow direction: auto_invest or earn, default: auto_invest | [optional] [default to undefined]
**type** | **number** | 0 Normal creation, 1 QuickInvestment | [optional] [default to undefined]

