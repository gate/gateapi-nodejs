# AIHubPortfolioDetailData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyId** | **string** |  | [default to undefined]
**strategyType** | [**StrategyType**](StrategyType.md) |  | [default to undefined]
**market** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**baseInfo** | **{ [key: string]: string; }** | 基础信息，字段按策略类型动态变化 | [default to undefined]
**metrics** | **{ [key: string]: string; }** | 指标信息，字段按策略类型动态变化 | [default to undefined]
**position** | **{ [key: string]: string; }** | 仓位或持仓信息，字段按策略类型动态变化 | [optional] [default to undefined]
**stopSupported** | **boolean** |  | [default to undefined]

