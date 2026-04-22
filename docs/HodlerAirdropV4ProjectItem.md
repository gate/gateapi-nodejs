# HodlerAirdropV4ProjectItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hodlerId** | **string** | Product ID | [default to undefined]
**name** | **string** | Product Name | [default to undefined]
**asset** | **string** | Airdrop currency | [default to undefined]
**status** | **string** | Project status | [default to undefined]
**totalAmount** | **string** | Total airdrop amount | [default to undefined]
**openTimest** | **string** | Event start time, format Y-m-d H:i:s, UTC | [default to undefined]
**closeTimest** | **string** | Event end time, format Y-m-d H:i:s, UTC | [default to undefined]
**perGtRewardToken** | **string** | The number of airdrop coins that can be obtained for each GT. When the calculation is in progress, an empty string is returned. | [optional] [default to undefined]
**userCount** | **string** | Number of participants | [optional] [default to undefined]
**maxQueueAmount** | **string** | Personal GT limit | [optional] [default to undefined]

## Enum: HodlerAirdropV4ProjectItem.Status

* `UNDERWAY` (value: `'UNDERWAY'`)

* `PREHEAT` (value: `'PREHEAT'`)

* `FINISH` (value: `'FINISH'`)


