# FindCoinStructItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pid** | **number** | Product ID | [default to undefined]
**productType** | **number** | Project type 0-voucher 1-locked position 2-US Treasury bond | [default to undefined]
**isDefi** | **number** | Is DEFI protocol 0-no 1-yes | [default to undefined]
**currency** | **string** | Staked currencies (multiple entries separated by commas) | [default to undefined]
**estimateApr** | **string** | Estimated yield rate | [default to undefined]
**minStakeAmount** | **string** | Minimum staked amount | [default to undefined]
**maxStakeAmount** | **string** | Maximum staked amount | [default to undefined]
**protocolName** | **string** | Protocol name | [default to undefined]
**redeemPeriod** | **string** | Redemption period (days) | [default to undefined]
**exchangeRate** | **string** | Exchange rate | [default to undefined]
**exchangeRateReserve** | **string** | Reverse exchange rate | [default to undefined]
**extraInterest** | [**Array<FindCoinStructItemExtraInterestItem>**](FindCoinStructItemExtraInterestItem.md) | Additional rewards | [optional] [default to undefined]
**currencyRewards** | [**Array<FindCoinStructItemCurrencyRewardsItem>**](FindCoinStructItemCurrencyRewardsItem.md) | Reward currency information | [default to undefined]

