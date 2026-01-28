# InlineObject8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cryptoCurrency** | **string** | Cryptocurrency | [default to undefined]
**fiatCurrency** | **string** | Fiat currency | [default to undefined]
**selectType** | **string** | Buy/Sell (sell&#x3D;Sell, buy&#x3D;Buy, others&#x3D;All) | [optional] [default to undefined]
**status** | **string** | 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED） | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**startTime** | **number** | Start timestamp, default is 00:00 89 days ago | [optional] [default to undefined]
**endTime** | **number** | End timestamp, default is 23:59:59 today | [optional] [default to undefined]
**queryDispute** | **number** | 1: Include appeal status, 0: None | [optional] [default to undefined]
**page** | **number** | page number | [optional] [default to undefined]
**perPage** | **number** | Number of orders per page | [optional] [default to undefined]

