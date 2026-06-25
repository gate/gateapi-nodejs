# SetMerchantWorkHoursRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workStatus** | **number** | Working status. 0: resting, 1: working, 2: using custom working hours | [default to undefined]
**cycleType** | **string** | Custom working cycle; required when work_status is 2 | [optional] [default to undefined]
**dayOfWeek** | **string** | Weekly working days, comma-separated values 1-7 for Monday to Sunday; required when work_status is 2 and cycle_type is Weekly | [optional] [default to undefined]
**timeZone** | **string** | UTC timezone offset, ranging from -12 to +14; required when work_status is 2 | [optional] [default to undefined]
**startTime** | **string** | Custom working start time in HH:mm format; required when work_status is 2 and must not be later than end_time | [optional] [default to undefined]
**endTime** | **string** | Custom working end time in HH:mm format; required when work_status is 2 and must not be earlier than start_time | [optional] [default to undefined]

## Enum: SetMerchantWorkHoursRequest.WorkStatus

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: SetMerchantWorkHoursRequest.CycleType

* `Weekly` (value: `'Weekly'`)

* `Daily` (value: `'Daily'`)


