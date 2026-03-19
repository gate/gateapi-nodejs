# ApiResponseExSkillGetBeginnerTaskListRespDataTasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**welfareTaskId** | **number** | Rewards Center task ID | [optional] [default to undefined]
**taskCenterId** | **number** | Task center task ID (fixed at 0 for registration tasks) | [optional] [default to undefined]
**taskType** | **number** | Task type: 1 &#x3D; KYC level-2 verification, 2 &#x3D; spot, 3 &#x3D; futures, 4 &#x3D; referral, 5 &#x3D; quantitative, 6 &#x3D; earn, 7 &#x3D; startup, 8 &#x3D; first deposit, 10 &#x3D; registration task, 11 &#x3D; onboarding task | [optional] [default to undefined]
**taskName** | **string** | Task name | [optional] [default to undefined]
**taskDesc** | **string** | Task description, may contain &lt;span&gt; highlight tags | [optional] [default to undefined]
**rewardNum** | **string** | Reward value | [optional] [default to undefined]
**rewardUnit** | **string** | Reward unit (e.g., USDT, BTC) | [optional] [default to undefined]
**prizeType** | **number** | Reward type: 1 &#x3D; points, 2 &#x3D; regular coupon, 3 &#x3D; VIP coupon | [optional] [default to undefined]
**status** | **number** | Task status: 0 &#x3D; unclaimed, 1 &#x3D; claimed, 2 &#x3D; reward pending, 3 &#x3D; rewarding, 4 &#x3D; completed, 5 &#x3D; expired | [optional] [default to undefined]

## Enum: ApiResponseExSkillGetBeginnerTaskListRespDataTasks.PrizeType

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


## Enum: ApiResponseExSkillGetBeginnerTaskListRespDataTasks.Status

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)

* `NUMBER_4` (value: `4`)

* `NUMBER_5` (value: `5`)


