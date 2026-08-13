# OtcOrderDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [default to undefined]
**uid** | **string** | User ID | [default to undefined]
**type** | **string** | Order Type | [default to undefined]
**fiatCurrency** | **string** | Fiat currency | [default to undefined]
**fiatAmount** | **string** | Fiat amount | [default to undefined]
**cryptoCurrency** | **string** | Digital currency | [default to undefined]
**cryptoAmount** | **string** | Cryptocurrency amount | [default to undefined]
**rate** | **string** | Exchange rate | [default to undefined]
**bankAccountName** | **string** | User payment/receiving name | [optional] [default to undefined]
**bankName** | **string** | User payment/receiving bank name | [optional] [default to undefined]
**bankCountry** | **string** | User payment/receiving bank country | [optional] [default to undefined]
**bankAddress** | **string** | User payment/receiving bank address | [optional] [default to undefined]
**bankAccountNumberIban** | **string** | User payment/receiving bank account number/IBAN | [optional] [default to undefined]
**swiftCode** | **string** | User payment/receiving bank SWIFT code | [optional] [default to undefined]
**intermediateBankName** | **string** | User payment/receiving intermediary bank name | [optional] [default to undefined]
**intermediaryBankSwiftCode** | **string** | User payment/receiving intermediary bank SWIFT code | [optional] [default to undefined]
**gateBankAccountName** | **string** | Gate beneficiary name, shown for BUY only | [optional] [default to undefined]
**gateBankName** | **string** | Gate beneficiary bank name, shown for BUY only | [optional] [default to undefined]
**gateBankCountry** | **string** | Gate beneficiary bank country, shown for BUY only | [optional] [default to undefined]
**gateBankAddress** | **string** | Gate beneficiary bank address, shown for BUY only | [optional] [default to undefined]
**gateBankAccountNumberIban** | **string** | Gate beneficiary bank account number/IBAN, shown for BUY only | [optional] [default to undefined]
**gateSwiftCode** | **string** | Gate beneficiary bank SWIFT code, shown for BUY only | [optional] [default to undefined]
**gateIntermediaryBankName** | **string** | Gate beneficiary intermediary bank name, shown for BUY only | [optional] [default to undefined]
**gateIntermediaryBankSwiftCode** | **string** | Gate beneficiary intermediary bank SWIFT code, shown for BUY only | [optional] [default to undefined]
**gateTransferRemark** | **string** | Transfer remark (mutually exclusive with &#x60;gate_reference_code&#x60;; empty when a BUY deposit order has a reference code), shown for BUY only | [optional] [default to undefined]
**gateReferenceCode** | **string** | Be sure to include the reference code when making the transfer so that your order can be processed promptly. (Mutually exclusive with &#x60;gate_transfer_remark&#x60;.) | [optional] [default to undefined]
**status** | **string** | Status | [default to undefined]
**createTime** | **string** | Created time | [default to undefined]

