# OtcUploadPreUploadData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileKey** | **string** | Base64 temporary object path; pass back **unchanged** on business submit—do not decode | [default to undefined]
**url** | **string** | S3 direct upload URL | [default to undefined]
**fields** | [**OtcUploadPreUploadPolicyFields**](OtcUploadPreUploadPolicyFields.md) |  | [default to undefined]
**expiresIn** | **number** | Policy validity period in seconds; currently 5400 (90 minutes); aligns with &#x60;expiration&#x60; in &#x60;fields.Policy&#x60;; call this endpoint again after expiry | [default to undefined]

