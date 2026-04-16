# HodlerAirdropV4ProjectItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hodlerId** | **string** | Product ID | [default to undefined]
**name** | **string** | Product Name | [default to undefined]
**asset** | **string** | 空投币种 | [default to undefined]
**status** | **string** | 项目状态 | [default to undefined]
**totalAmount** | **string** | 空投总量 | [default to undefined]
**openTimest** | **string** | 活动开始时间，格式 Y-m-d H:i:s，UTC | [default to undefined]
**closeTimest** | **string** | 活动结束时间，格式 Y-m-d H:i:s，UTC | [default to undefined]
**perGtRewardToken** | **string** | 每枚GT可获得的空投币数量，计算中时返回空字符串 | [optional] [default to undefined]
**userCount** | **string** | 参与人数 | [optional] [default to undefined]
**maxQueueAmount** | **string** | 个人参与GT上限 | [optional] [default to undefined]

## Enum: HodlerAirdropV4ProjectItem.Status

* `UNDERWAY` (value: `'UNDERWAY'`)

* `PREHEAT` (value: `'PREHEAT'`)

* `FINISH` (value: `'FINISH'`)


