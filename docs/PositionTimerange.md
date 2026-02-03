# PositionTimerange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract | [optional] [readonly] [default to undefined]
**size** | **string** | Position size | [optional] [readonly] [default to undefined]
**leverage** | **string** | Position leverage. 0 means cross margin; positive number means isolated margin | [optional] [default to undefined]
**riskLimit** | **string** | Position risk limit | [optional] [default to undefined]
**leverageMax** | **string** | the maximum permissible leverage given to the current positon value: the higher positon value, the lower maximum permissible leverage | [optional] [readonly] [default to undefined]
**maintenanceRate** | **string** | The maintenance margin rate of the first tier of risk limit sheet | [optional] [readonly] [default to undefined]
**margin** | **string** | Position margin | [optional] [default to undefined]
**liqPrice** | **string** | Liquidation price | [optional] [readonly] [default to undefined]
**realisedPnl** | **string** | Realized PnL | [optional] [readonly] [default to undefined]
**historyPnl** | **string** | Total realized PnL from closed positions | [optional] [readonly] [default to undefined]
**lastClosePnl** | **string** | PNL of last position close | [optional] [readonly] [default to undefined]
**realisedPoint** | **string** | Realized POINT PNL | [optional] [readonly] [default to undefined]
**historyPoint** | **string** | History realized POINT PNL | [optional] [readonly] [default to undefined]
**mode** | **string** | Position mode, including: - &#x60;single&#x60;: One-way Mode - &#x60;dual_long&#x60;: Long position in Hedge Mode - &#x60;dual_short&#x60;: Short position in Hedge Mode | [optional] [default to undefined]
**crossLeverageLimit** | **string** | Cross margin leverage (valid only when &#x60;leverage&#x60; is 0) | [optional] [default to undefined]
**entryPrice** | **string** | Entry price | [optional] [readonly] [default to undefined]
**time** | **number** | Timestamp | [optional] [default to undefined]

