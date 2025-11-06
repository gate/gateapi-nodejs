# DepositRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Token amount | [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**status** | **string** | Transaction Status  - BLOCKED: Deposit Blocked - DEP_CREDITED: Deposit Credited, Withdrawal Pending Unlock - DONE: Funds Credited to Spot Account - INVALID: Invalid Transaction - MANUAL: Manual Review Required - PEND: Processing - REVIEW: Under Compliance Review - TRACK: Tracking Block Confirmations, Pending Spot Account Credit | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

