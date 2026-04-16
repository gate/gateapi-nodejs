# ApiResponseExSkillGetBeginnerTaskListRespDataTasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**welfareTaskId** | **number** | Rewards Center task ID | [optional] [default to undefined]
**taskCenterId** | **number** | Task center task ID (fixed at 0 for registration tasks) | [default to undefined]
**taskType** | **number** | 任务类型：1&#x3D;KYC二级认证 2&#x3D;现货 3&#x3D;合约 4&#x3D;邀请 5&#x3D;量化 6&#x3D;余币宝 7&#x3D;startup 8&#x3D;首次入金 10&#x3D;注册任务 11&#x3D;引导任务 23&#x3D;下载任务 | [optional] [default to undefined]
**taskName** | **string** | Task name | [optional] [default to undefined]
**taskDesc** | **string** | Task description, may contain &lt;span&gt; highlight tags | [optional] [default to undefined]
**rewardNum** | **string** | Reward value | [optional] [default to undefined]
**rewardUnit** | **string** | Reward unit (e.g., USDT, BTC) | [optional] [default to undefined]
**prizeType** | **number** | Reward type: 1 &#x3D; points, 2 &#x3D; regular coupon, 3 &#x3D; VIP coupon | [optional] [default to undefined]
**status** | **number** | 任务状态：0&#x3D;未领取（典型为待领取下载任务） 1&#x3D;已领取/进行中 2&#x3D;已完成待领奖 3&#x3D;发奖中 4&#x3D;已完成/已结算 5&#x3D;已过期 | [default to undefined]

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


