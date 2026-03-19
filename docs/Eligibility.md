# Eligibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible** | **boolean** | Whether eligible for application | [default to undefined]
**blockReasons** | **Array&lt;string&gt;** | List of ineligibility reason descriptions | [default to undefined]
**blockReasonCodes** | **Array&lt;string&gt;** | List of ineligibility reason codes | [default to undefined]

## Enum: Array&lt;Eligibility.BlockReasonCodes&gt;

* `UserNotExist` (value: `'user_not_exist'`)

* `UserBlacked` (value: `'user_blacked'`)

* `SubAccount` (value: `'sub_account'`)

* `AlreadyAgent` (value: `'already_agent'`)

* `KycIncomplete` (value: `'kyc_incomplete'`)

* `InAgentTree` (value: `'in_agent_tree'`)

* `ChCodeConflict` (value: `'ch_code_conflict'`)


