# OtcBankCreateMultipartRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccountName** | **string** |  | [default to undefined]
**bankName** | **string** |  | [default to undefined]
**bankCountry** | **string** |  | [default to undefined]
**bankAddress** | **string** |  | [default to undefined]
**iban** | **string** |  | [default to undefined]
**swift** | **string** |  | [default to undefined]
**remittanceLineNumber** | **string** |  | [optional] [default to undefined]
**agentBankName** | **string** |  | [optional] [default to undefined]
**agentBankSwift** | **string** |  | [optional] [default to undefined]
**documentationFile** | **string** | Multipart direct upload; mutually exclusive with documentation_file_key | [optional] [default to undefined]
**documentationFileKey** | **string** | Pre-upload mode; file_key returned by pre_upload (plaintext or base64 accepted) | [optional] [default to undefined]
**fileType** | **string** | Required when using documentation_file_key; plaintext MIME or its base64 | [optional] [default to undefined]

