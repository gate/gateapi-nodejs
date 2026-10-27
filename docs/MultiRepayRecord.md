# MultiRepayRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number &#124; bigint** | Order ID | [optional] [default to undefined]
**recordId** | **number &#124; bigint** | Repayment record ID | [optional] [default to undefined]
**initLtv** | **string** | Initial collateralization rate | [optional] [default to undefined]
**beforeLtv** | **string** | Ltv before the operation | [optional] [default to undefined]
**afterLtv** | **string** | Ltv after the operation | [optional] [default to undefined]
**borrowTime** | **number &#124; bigint** | Borrowing time, timestamp in seconds | [optional] [default to undefined]
**repayTime** | **number &#124; bigint** | Repayment time, timestamp in seconds | [optional] [default to undefined]
**borrowCurrencies** | [**Array<RepayRecordCurrency>**](RepayRecordCurrency.md) | List of borrowing information | [optional] [default to undefined]
**collateralCurrencies** | [**Array<RepayRecordCurrency>**](RepayRecordCurrency.md) | List of collateral information | [optional] [default to undefined]
**repaidCurrencies** | [**Array<RepayRecordRepaidCurrency>**](RepayRecordRepaidCurrency.md) | Repay Currency List | [optional] [default to undefined]
**totalInterestList** | [**Array<RepayRecordTotalInterest>**](RepayRecordTotalInterest.md) | Total Interest List | [optional] [default to undefined]
**leftRepayInterestList** | [**Array<RepayRecordLeftInterest>**](RepayRecordLeftInterest.md) | List of remaining interest to be repaid | [optional] [default to undefined]

