# GetUserCouponDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Response code. &#x60;0&#x60; &#x3D; success; &#x60;2002&#x60; &#x3D; user not logged in; &#x60;50105&#x60; &#x3D; parameter validation failed; &#x60;10001&#x60; &#x3D; coupon record does not exist or does not belong to current user; &#x60;10000&#x60; &#x3D; invalid parameter (e.g., task coupon missing coupon_info) | [optional] [default to undefined]
**label** | **string** | Error identifier code. Empty string on success, machine-readable error label on error | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**data** | [**GetUserCouponDetailResponseData**](GetUserCouponDetailResponseData.md) |  | [optional] [default to undefined]

## Enum: GetUserCouponDetailResponse.Code

* `NUMBER_0` (value: `0`)

* `NUMBER_2002` (value: `2002`)

* `NUMBER_50105` (value: `50105`)

* `NUMBER_10001` (value: `10001`)

* `NUMBER_10000` (value: `10000`)


