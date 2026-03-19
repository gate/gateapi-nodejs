# FixedTermProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Product ID | [optional] [default to undefined]
**name** | **string** | Product name | [optional] [default to undefined]
**asset** | **string** | Currency | [optional] [default to undefined]
**lockUpPeriod** | **number** | Lock-up period (in days) | [optional] [default to undefined]
**minLendAmount** | **string** | Minimum earn amount | [optional] [default to undefined]
**userMaxLendAmount** | **string** | User maximum earn limit | [optional] [default to undefined]
**totalLendAmount** | **string** | Platform earn limit | [optional] [default to undefined]
**yearRate** | **string** | Annual interest rate | [optional] [default to undefined]
**type** | **number** | Product type: 1 for regular, 2 for VIP | [optional] [default to undefined]
**preRedeem** | **number** | Whether early redemption is supported: 0 for not supported, 1 for supported | [optional] [default to undefined]
**reinvest** | **number** | Whether auto-renewal is supported: 0 for not supported, 1 for supported | [optional] [default to undefined]
**redeemAccount** | **number** | Whether fixed-to-flexible conversion is supported: 0 for not supported, 1 for supported | [optional] [default to undefined]
**minVip** | **number** | Minimum VIP level requirement, 0-16, 0 means no restriction | [optional] [default to undefined]
**maxVip** | **number** | Maximum VIP level requirement (0-16), 0 means no restriction | [optional] [default to undefined]
**status** | **number** | Product status: 1 for unlisted, 2 for listed, 3 for delisted | [optional] [default to undefined]
**createTime** | **string** | Created time | [optional] [default to undefined]
**userMaxLendVolume** | **string** | User maximum earn amount | [optional] [default to undefined]
**userTotalAmount** | **string** | Total amount the user has invested in earn products | [optional] [default to undefined]
**saleStatus** | **number** | Sale status: 1 for on sale, 2 for sold out | [optional] [default to undefined]

