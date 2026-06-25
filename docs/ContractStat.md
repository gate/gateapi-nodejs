# ContractStat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Stat timestamp | [optional] [default to undefined]
**lsrTaker** | **number** | Long/short taker ratio | [optional] [default to undefined]
**lsrAccount** | **number** | Long/short position user ratio | [optional] [default to undefined]
**longLiqSize** | **string** | Long liquidation size (contracts) | [optional] [default to undefined]
**longLiqAmount** | **number** | Long liquidation amount (base currency) | [optional] [default to undefined]
**longLiqUsd** | **number** | Long liquidation volume (quote currency) | [optional] [default to undefined]
**longLiqUsdNew** | **number** | Long liquidations in quote currency; USDT settlement: long_liq_size × multiplier × mark price | [optional] [default to undefined]
**shortLiqSize** | **string** | Short liquidation size (contracts) | [optional] [default to undefined]
**shortLiqAmount** | **number** | Short liquidation amount (base currency) | [optional] [default to undefined]
**shortLiqUsd** | **number** | Short liquidation volume (quote currency) | [optional] [default to undefined]
**shortLiqUsdNew** | **number** | Short liquidations in quote currency; USDT settlement: short_liq_size × multiplier × mark price | [optional] [default to undefined]
**openInterest** | **string** | Total open interest size (contracts) | [optional] [default to undefined]
**openInterestUsd** | **number** | Total open interest volume (quote currency) | [optional] [default to undefined]
**topLsrAccount** | **number** | Top trader long/short account ratio | [optional] [default to undefined]
**topLsrSize** | **string** | Top trader long/short position ratio | [optional] [default to undefined]
**markPrice** | **number** | Mark price | [optional] [default to undefined]
**topLongSize** | **string** | Top long open interest (contracts) | [optional] [default to undefined]
**topShortSize** | **string** | Top short open interest (contracts) | [optional] [default to undefined]
**longTakerSize** | **string** | Long taker trade volume (contracts) | [optional] [default to undefined]
**shortTakerSize** | **string** | Short taker trade volume (contracts) | [optional] [default to undefined]
**topLongAccount** | **number** | Number of top long accounts (large holders) | [optional] [default to undefined]
**topShortAccount** | **number** | Number of top short accounts (large holders) | [optional] [default to undefined]
**longUsers** | **string** | Number of users holding long positions | [optional] [default to undefined]
**shortUsers** | **string** | Number of users holding short positions | [optional] [default to undefined]

