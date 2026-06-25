# TradFiClosePositionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closeType** | **number** | Close Type Description: - 1: Partial Close (close_volume is required) - 2: Full Close (close_volume is not required) | [default to undefined]
**closeVolume** | **string** | Close Volume Description: - Required when close_type &#x3D; 1 - Ignored when close_type &#x3D; 2 | [optional] [default to undefined]

## Enum: TradFiClosePositionRequest.CloseType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


