# InlineObject7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cryptoCurrency** | **string** | Cryptocurrency | [default to undefined]
**fiatCurrency** | **string** | Fiat currency | [default to undefined]
**orderTab** | **string** | Order tab, default is pending (pending: Processing (pending: AND status in (\&#39;OPEN\&#39;,  \&#39;PAID\&#39;, \&#39;LOCKED\&#39;, \&#39;TEMP\&#39;)); dispute: In dispute (status in (\&#39;ACCEPT\&#39;,  \&#39;BCLOSED\&#39;, \&#39;CANCEL\&#39;, \&#39;BECANCEL\&#39;, \&#39;SCLOSED\&#39;, \&#39;SCANCEL\&#39;))) | [optional] [default to undefined]
**selectType** | **string** | Buy/Sell (sell&#x3D;Sell, buy&#x3D;Buy, others&#x3D;All) | [optional] [default to undefined]
**status** | **string** | 订单状态（dispute: 申诉订单； closed: ACCEPT、BCLOSED； cancel： CANCEL、BECANCEL、SCLOSED、SCANCEL； locked: LOCKED； open: OPEN； paid： PAID； completed： CANCEL、BECANCEL、SCLOSED、SCANCEL、ACCEPT、BCLOSED） | [optional] [default to undefined]
**txid** | **number** | Order ID | [optional] [default to undefined]
**startTime** | **number** | Start timestamp, default is 00:00 89 days ago | [optional] [default to undefined]
**endTime** | **number** | End timestamp, default is 23:59:59 today | [optional] [default to undefined]

