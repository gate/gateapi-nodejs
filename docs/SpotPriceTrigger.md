# SpotPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Trigger price | [default to undefined]
**rule** | **string** | 价格条件类型 - 大于等于 (&gt;&#x3D;): 表示市场价格大于等于 price 时触发 - 小于等于 (&lt;&#x3D;): 表示市场价格小于等于 price 时触发 | [default to undefined]
**expiration** | **number** | Maximum wait time for trigger condition (in seconds). Order will be cancelled if timeout | [default to undefined]

## Enum: SpotPriceTrigger.Rule

* `GreaterThanOrEqualTo` (value: `'>='`)

* `LessThanOrEqualTo` (value: `'<='`)


