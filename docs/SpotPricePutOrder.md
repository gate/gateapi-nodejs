# SpotPricePutOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Order type，default to &#x60;limit&#x60;  - limit : Limit Order - market : Market Order | [optional] [default to &#39;limit&#39;]
**side** | **string** | Order side  - buy: buy side - sell: sell side | [default to undefined]
**price** | **string** | Order price | [default to undefined]
**amount** | **string** | Trading quantity, refers to the trading quantity of the trading currency, i.e., the currency that needs to be traded, for example, the quantity of BTC in BTC_USDT. | [default to undefined]
**account** | **string** | Trading account type. Unified account must be set to &#x60;unified&#x60;  - normal: spot trading - margin: margin trading - unified: unified account  | [default to &#39;normal&#39;]
**timeInForce** | **string** | time_in_force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only  | [optional] [default to &#39;gtc&#39;]
**autoBorrow** | **boolean** | Whether to borrow coins automatically | [optional] [default to undefined]
**autoRepay** | **boolean** | Whether to repay the loan automatically | [optional] [default to undefined]
**text** | **string** | The source of the order, including: - web: Web - api: API call - app: Mobile app | [optional] [default to undefined]

## Enum: SpotPricePutOrder.Type

* `Limit` (value: `'limit'`)

* `Market` (value: `'market'`)


## Enum: SpotPricePutOrder.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: SpotPricePutOrder.Account

* `Normal` (value: `'normal'`)

* `Margin` (value: `'margin'`)

* `Unified` (value: `'unified'`)


## Enum: SpotPricePutOrder.TimeInForce

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


