# FixedTermLendOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Subscription record ID | [optional] [default to undefined]
**business** | **number** | Business type: 1 for regular, 2 for VIP | [optional] [default to undefined]
**orderId** | **number** | Order ID | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**asset** | **string** | Currency | [optional] [default to undefined]
**productId** | **number** | Product ID | [optional] [default to undefined]
**lockUpPeriod** | **number** | Lock-up period (in days) | [optional] [default to undefined]
**principal** | **string** | Subscription principal | [optional] [default to undefined]
**yearRate** | **string** | Annual interest rate | [optional] [default to undefined]
**productType** | **number** | Product type: 1 for regular, 2 for VIP | [optional] [default to undefined]
**interest** | **string** | Accrued interest | [optional] [default to undefined]
**status** | **number** | Order status: 1 for holding, 2 for redeemed, 3 for matured, 4 for settled | [optional] [default to undefined]
**reinvestStatus** | **number** | Auto-renewal status: 0 for disabled, 1 for enabled | [optional] [default to undefined]
**redeemAccountType** | **number** | Redemption payout account type: 1 for spot account | [optional] [default to undefined]
**originOrder** | **string** | Original order ID, linked to previous order IDs in auto-renewal scenarios | [optional] [default to undefined]
**redeemType** | **number** | Redemption type: 1 for early redemption, 2 for maturity redemption | [optional] [default to undefined]
**redeemTime** | **string** | Redemption time | [optional] [default to undefined]
**finishTime** | **string** | Expiration time | [optional] [default to undefined]
**createTime** | **string** | Created time | [optional] [default to undefined]
**yearRatePerent** | **string** | Annual interest rate percentage display value | [optional] [default to undefined]
**totalYearRatePercent** | **string** | Comprehensive annualized yield percentage (including interest rate boost, rewards, etc.) | [optional] [default to undefined]
**totalInterest** | **string** | Total earnings (including interest and bonus rewards) | [optional] [default to undefined]
**productInfo** | [**FixedTermProductInfo**](FixedTermProductInfo.md) |  | [optional] [default to undefined]
**bonusInfo** | [**FixedTermBonusInfo**](FixedTermBonusInfo.md) |  | [optional] [default to undefined]
**couponInfo** | [**FixedTermCouponInfo**](FixedTermCouponInfo.md) |  | [optional] [default to undefined]
**redeemAt** | **number** | Redemption timestamp (in seconds) | [optional] [default to undefined]
**finishAt** | **number** | Expiration timestamp (in seconds) | [optional] [default to undefined]
**createAt** | **number** | Creation timestamp (in seconds) | [optional] [default to undefined]
**icon** | **string** | Currency icon URL | [optional] [default to undefined]

