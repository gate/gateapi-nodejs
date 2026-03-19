# FixedTermBonusInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Activity ID | [optional] [default to undefined]
**productId** | **number** | Associated product ID | [optional] [default to undefined]
**asset** | **string** | Product currency | [optional] [default to undefined]
**bonusAsset** | **string** | Reward currency | [optional] [default to undefined]
**kycLimit** | **string** | KYC level restrictions, comma-separated | [optional] [default to undefined]
**ladderApr** | [**Array&lt;LadderApr&gt;**](LadderApr.md) | Tiered annual interest rate | [optional] [default to undefined]
**totalBonusAmount** | **string** | Total reward amount | [optional] [default to undefined]
**userTotalBonusAmount** | **string** | Maximum reward per user | [optional] [default to undefined]
**status** | **number** | Activity status: 1 for unlisted, 2 for listed, 3 for delisted | [optional] [default to undefined]
**startTime** | **string** | Activity start time | [optional] [default to undefined]
**endTime** | **string** | Activity end time | [optional] [default to undefined]
**createTime** | **string** | Created time | [optional] [default to undefined]
**startAt** | **number** | Activity start timestamp (in seconds) | [optional] [default to undefined]
**endAt** | **number** | Activity end timestamp (in seconds) | [optional] [default to undefined]
**totalIssuedAmount** | **string** | Total rewards distributed | [optional] [default to undefined]
**userTotalIssuedAmount** | **string** | Total rewards distributed to the user | [optional] [default to undefined]
**bonusAssetPrice** | **string** | Reward currency price (denominated in USDT) | [optional] [default to undefined]
**productAssetPrice** | **string** | Product currency price (denominated in USDT) | [optional] [default to undefined]
**productYearRate** | **string** | Product base annual interest rate | [optional] [default to undefined]

