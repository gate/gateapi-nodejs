# WithdrawalsDel

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
**status** | **string** | 交易状态  - BCODE: 充值码操作 - CANCEL: 已取消 - CANCELPEND: 取消提现中 - DMOVE: 待人工审核 - DONE: 完成 (block_number &gt; 0 才算真的上链完成) - EXTPEND: 已经发送等待确认 - FAIL: 链上失败等待确认 - FVERIFY: 人脸审核处理中 - LOCKED: 钱包侧锁单 - MANUAL: 待人工审核 - REJECT: 拒绝 - REQUEST: 请求中 - REVIEW: 审核中 | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

