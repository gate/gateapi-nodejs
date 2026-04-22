# PreviewToParam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Target currency symbol; often corresponds to &#x60;recommend_v2.*[].schemes[].name&#x60; in config. | [default to undefined]
**ratio** | **string** | The weight ratio of the target currency in the portfolio, **decimal string** (such as &#x60;0.2&#x60;, &#x60;0.5&#x60;). Often consistent with the &#x60;schemes[].ratio&#x60; of a strategy under &#x60;recommend_v2&#x60; of &#x60;GET /asset-swap/config&#x60;. | [default to undefined]

