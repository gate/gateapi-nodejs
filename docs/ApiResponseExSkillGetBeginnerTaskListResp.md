# ApiResponseExSkillGetBeginnerTaskListResp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Business error code: 0 &#x3D; success, 1007 &#x3D; no task data, 1008 &#x3D; not logged in | [default to undefined]
**label** | **string** | Error identifier code. Empty string on success, machine-readable error label on error | [optional] [default to undefined]
**message** | **string** | Error description | [optional] [default to undefined]
**data** | [**ApiResponseExSkillGetBeginnerTaskListRespData**](ApiResponseExSkillGetBeginnerTaskListRespData.md) |  | [optional] [default to undefined]
**timestamp** | **number** | Server timestamp (milliseconds) | [default to undefined]

