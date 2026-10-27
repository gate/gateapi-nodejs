# TradFiSpotClosePositionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol | [default to undefined]
**closeVolume** | **string** | Close quantity; required for partial close | [optional] [default to undefined]
**closeType** | **TradFiSpotClosePositionRequest.CloseType** | Close type (1&#x3D;partial close, 2&#x3D;close all) | [default to undefined]

## Enum: TradFiSpotClosePositionRequest.CloseType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


