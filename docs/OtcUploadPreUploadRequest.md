# OtcUploadPreUploadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentType** | **OtcUploadPreUploadRequest.ContentType** | **Base64** of the file MIME type, required. Only image/png, image/jpeg, image/jpg, and application/pdf are supported. | [default to undefined]
**scene** | **OtcUploadPreUploadRequest.Scene** | Business scene, optional, defaults to general; determines temporary path and production directory after relocation | [optional] [default to &#39;general&#39;]

## Enum: OtcUploadPreUploadRequest.ContentType

* `AW1hZ2UvcG5n` (value: `'aW1hZ2UvcG5n'`)

* `AW1hZ2UvanBlZw` (value: `'aW1hZ2UvanBlZw=='`)

* `AW1hZ2UvanBn` (value: `'aW1hZ2UvanBn'`)

* `YXBwbGljYXRpb24vcGRm` (value: `'YXBwbGljYXRpb24vcGRm'`)


## Enum: OtcUploadPreUploadRequest.Scene

* `General` (value: `'general'`)

* `Bank` (value: `'bank'`)

* `Assessment` (value: `'assessment'`)

* `Credit` (value: `'credit'`)


