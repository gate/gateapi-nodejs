# AssetListStructItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pid** | **number** | Product ID | [default to undefined]
**mortgage_coin** | **string** | Staked currencies (multiple entries separated by commas) | [default to undefined]
**mortgage_amount** | **string** | Position amount | [default to undefined]
**createStamp** | **number** | First timestamp | [default to undefined]
**extra_income** | **string** | Additional rewards converted to USDT amount | [default to undefined]
**freeze_amount** | **string** | Locked amount, used in trading | [default to undefined]
**move_income** | **string** |  | [default to undefined]
**type** | **number** | Type 0-voucher 1-locked position 2-US Treasury bond | [default to undefined]
**status** | **number** | Status. 1 - currency project listed, 2 - currency project delisted | [default to undefined]
**income_total** | **string** | Total earnings by currency | [default to undefined]
**yesterday_income_multi** | **Array<object>** | Yesterday\&#39;s earnings | [default to undefined]
**reward_coins** | [**Array<AssetListStructItemRewardCoinsItem>**](AssetListStructItemRewardCoinsItem.md) | Currency-specific reward earnings | [default to undefined]
**defi_income** | [**AssetListStructItemDefiIncome**](AssetListStructItemDefiIncome.md) | DEIF earnings | [default to undefined]

