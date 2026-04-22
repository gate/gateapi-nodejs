# ApiResponseExSkillGetBeginnerTaskListRespDataTasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**welfareTaskId** | **number** | Rewards Center task ID | [optional] [default to undefined]
**taskCenterId** | **number** | Task center task ID (fixed at 0 for registration tasks) | [default to undefined]
**taskType** | **number** | Task type: 1&#x3D;KYC secondary certification 2&#x3D;Spot 3&#x3D;Contract 4&#x3D;Invitation 5&#x3D;Quantification 6&#x3D;Yu Bibao 7&#x3D;startup 8&#x3D;First deposit 10&#x3D;Registration task 11&#x3D;Guide task 23&#x3D;Download task | [optional] [default to undefined]
**taskName** | **string** | Task name | [optional] [default to undefined]
**taskDesc** | **string** | Task description, may contain &lt;span&gt; highlight tags | [optional] [default to undefined]
**rewardNum** | **string** | Reward value | [optional] [default to undefined]
**rewardUnit** | **string** | Reward unit (e.g., USDT, BTC) | [optional] [default to undefined]
**prizeType** | **number** | Reward type: 1 &#x3D; points, 2 &#x3D; regular coupon, 3 &#x3D; VIP coupon | [optional] [default to undefined]
**status** | **number** | Task status: 0&#x3D;Not claimed (typically a download task waiting to be claimed) 1&#x3D;Received/in progress 2&#x3D;Completed and waiting to be claimed 3&#x3D;Rewards in progress 4&#x3D;Completed/settled 5&#x3D;Expired | [default to undefined]

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


