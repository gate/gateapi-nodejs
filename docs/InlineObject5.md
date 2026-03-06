# InlineObject5

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closeType** | **number** | 平仓类型  说明： - 1：部分平仓（必须传 close_volume） - 2：全平（无需传 close_volume） | [default to undefined]
**closeVolume** | **string** | 平仓数量  说明： - 当 close_type &#x3D; 1 时必传 - 当 close_type &#x3D; 2 时忽略该字段 | [optional] [default to undefined]

## Enum: InlineObject5.CloseType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


