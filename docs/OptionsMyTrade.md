# OptionsMyTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number &#124; bigint** | Fill ID | [optional] [default to undefined]
**createTime** | **number** | Fill Time | [optional] [default to undefined]
**contract** | **string** | Options contract name | [optional] [default to undefined]
**orderId** | **number &#124; bigint** | Related order ID | [optional] [default to undefined]
**size** | **number &#124; bigint** | Trading size | [optional] [default to undefined]
**price** | **string** | Trade price (quote currency) | [optional] [default to undefined]
**underlyingPrice** | **string** | The forward futures price corresponding to the delivery date | [optional] [default to undefined]
**role** | **OptionsMyTrade.Role** | Trade role. taker - taker, maker - maker | [optional] [default to undefined]

## Enum: OptionsMyTrade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


