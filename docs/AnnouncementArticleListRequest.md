# AnnouncementArticleListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**titleQuery** | **string** | Article title to use when querying announcements. | [optional] [default to undefined]
**page** | **string** | Page number. Optional. Pass as a string, for example \&quot;1\&quot;. | [optional] [default to undefined]
**size** | **string** | Number of articles to return per page. Optional. Pass as a string, for example \&quot;5\&quot;. | [optional] [default to undefined]
**tags** | **string** | Article tags | [optional] [default to undefined]
**timer** | **string** | Query announcements from the last N days, with N passed as a string. For example, on the 10th, pass \&quot;10\&quot; to query announcements from the 1st through the 10th. | [optional] [default to undefined]
**cateName** | **string** | Announcement category name. | [optional] [default to undefined]
**cateLevel** | **string** | Category level, passed as a string: \&quot;1\&quot; or \&quot;2\&quot;. | [optional] [default to undefined]
**subWebsiteId** | **string** | Subsite ID, passed as a string: \&quot;0\&quot; for the main site or \&quot;177\&quot; for the Turkey site. Defaults to \&quot;0\&quot;. | [optional] [default to &#39;0&#39;]
**pinned** | **number** | Whether to include pinned articles: 1 to include them or 0 to exclude them. Defaults to 1. | [optional] [default to 1]
**updateAfter** | **number** | Query announcement articles updated after this timestamp. | [optional] [default to undefined]
**lang** | **string** | Language code, for example \&quot;cn\&quot;. | [optional] [default to undefined]
**filterEmptyContent** | **number** | Whether to exclude articles with empty content in the current language: 0 to keep them or 1 to exclude them. Defaults to 1. | [optional] [default to 1]

