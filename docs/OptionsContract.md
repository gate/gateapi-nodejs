# OptionsContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Options contract name | [optional] [default to undefined]
**tag** | **string** | Expiry periods include day, week, and month. | [optional] [default to undefined]
**createTime** | **number** | Created time | [optional] [default to undefined]
**expirationTime** | **number** | Expiration time | [optional] [default to undefined]
**isCall** | **boolean** | &#x60;true&#x60; means call options, &#x60;false&#x60; means put options | [optional] [default to undefined]
**multiplier** | **string** | The option contract multiplier indicates how many units of the underlying asset the face value of one contract represents. | [optional] [default to undefined]
**underlying** | **string** | Underlying | [optional] [default to undefined]
**underlyingPrice** | **string** | The forward futures price corresponding to the delivery date | [optional] [default to undefined]
**lastPrice** | **string** | Last trading price | [optional] [default to undefined]
**markPrice** | **string** | Current mark price (quote currency) | [optional] [default to undefined]
**indexPrice** | **string** | Current index price (quote currency) | [optional] [default to undefined]
**makerFeeRate** | **string** | Maker fee rate, negative values indicate rebates | [optional] [default to undefined]
**takerFeeRate** | **string** | Taker fee rate | [optional] [default to undefined]
**orderPriceRound** | **string** | Minimum order price increment | [optional] [default to undefined]
**markPriceRound** | **string** | Minimum mark price increment | [optional] [default to undefined]
**orderSizeMin** | **number** | Minimum order size allowed by the contract | [optional] [default to undefined]
**orderSizeMax** | **number** | Maximum order size allowed by the contract | [optional] [default to undefined]
**orderPriceDeviate** | **string** | Deprecated | [optional] [default to undefined]
**refDiscountRate** | **string** | Trading fee discount for referred users | [optional] [default to undefined]
**refRebateRate** | **string** | Commission rate for referrers | [optional] [default to undefined]
**orderbookId** | **number** | Orderbook update ID | [optional] [default to undefined]
**tradeId** | **number** | Deprecated | [optional] [default to undefined]
**tradeSize** | **number** | Historical cumulative trading volume | [optional] [default to undefined]
**positionSize** | **number** | Current total long position size | [optional] [default to undefined]
**ordersLimit** | **number** | The maximum number of open orders each user can place in this order book. | [optional] [default to undefined]

