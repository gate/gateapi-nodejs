# OtcUploadPreUploadPolicyFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Plaintext temporary object path, identical to base64_decode(file_key) | [default to undefined]
**contentType** | **string** | Must match the decoded content_type from the pre-upload request | [default to undefined]
**xAmzCredential** | **string** | AWS temporary credential and scope; submit them unchanged during direct upload | [default to undefined]
**xAmzAlgorithm** | **string** | AWS signing algorithm; submit it unchanged during direct upload | [default to undefined]
**xAmzDate** | **string** | AWS signing timestamp; submit it unchanged during direct upload | [default to undefined]
**policy** | **string** | Base64-encoded S3 POST Policy; submit it unchanged during direct upload | [default to undefined]
**xAmzSignature** | **string** | S3 POST Policy signature; submit it unchanged during direct upload | [default to undefined]

