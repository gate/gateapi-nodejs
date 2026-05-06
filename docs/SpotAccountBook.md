# SpotAccountBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Balance change record ID | [optional] [default to undefined]
**time** | **number** | The timestamp of the change (in milliseconds) | [optional] [default to undefined]
**currency** | **string** | Currency changed | [optional] [default to undefined]
**change** | **string** | Amount changed. Positive value means transferring in, while negative out | [optional] [default to undefined]
**balance** | **string** | Balance after change | [optional] [default to undefined]
**type** | **string** | Account change type; deprecated (see &#x60;code&#x60; for account change type encoding) | [optional] [default to undefined]
**code** | **string** | Account change code, see [Asset Record Code] (Asset Record Code) | [optional] [default to undefined]
**text** | **string** | Additional information | [optional] [default to undefined]

