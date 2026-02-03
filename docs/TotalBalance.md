# TotalBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | [**AccountBalance**](AccountBalance.md) |  | [optional] [default to undefined]
**details** | [**{ [key: string]: AccountBalance; }**](AccountBalance.md) | 各账户总额  - cross_margin: 全仓杠杆账户 - spot: 现货账户 - finance: 金融账户 - margin: 杠杆账户 - quant: 量化账户 - futures: 永续合约账户 - delivery: 交割合约账户 - warrant: warrant 账户 - cbbc: 牛熊证账户 - meme_box: alpha账户 - options: 期权账户 - payment: 支付账户 | [optional] [default to undefined]

