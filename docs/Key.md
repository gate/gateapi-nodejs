# Key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **number** | API Key Status: 1 - Normal, 2 - Locked, 3 - Frozen (can only be modified; default is 1 upon creation) | [optional] [default to undefined]
**mode** | **number** | User Mode: 1 - Classic, 2 - Legacy Unified (can only be specified during creation, non-modifiable afterwards) | [optional] [default to undefined]
**name** | **Array&lt;string&gt;** | API Key Remark | [optional] [default to undefined]
**currencyPairs** | **Array&lt;string&gt;** | Trading Pair Whitelist, Maximum 30 Pairs | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**ipWhitelist** | **Array&lt;string&gt;** | IP Whitelist | [optional] [default to undefined]
**perms** | [**Array&lt;KeyPerms&gt;**](KeyPerms.md) |  | [optional] [default to undefined]
**key** | [**AccountDetailKey**](AccountDetailKey.md) |  | [optional] [default to undefined]
**createdAt** | **string** | Created time | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Last Update Time | [optional] [readonly] [default to undefined]
**lastAccess** | **string** | Last Access Time | [optional] [readonly] [default to undefined]

