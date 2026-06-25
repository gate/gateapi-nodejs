# FuturesOrderAmendment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **string** | New order size, including filled part.  - If new size is less than or equal to filled size, the order will be cancelled. - Order side must be identical to the original one. - Close order size cannot be changed. - For reduce only orders, increasing size may leads to other reduce only orders being cancelled. - If price is not changed, decreasing size will not change its precedence in order book, while increasing will move it to the last at current price. | [optional] [default to undefined]
**price** | **string** | New order price | [optional] [default to undefined]
**amendText** | **string** | Custom info during order amendment | [optional] [default to undefined]
**text** | **string** | Internal users can modify information in the text field. | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode  When placing an order, different fields are returned based on the action_mode  - &#x60;ACK&#x60;: Asynchronous mode, returns only key order fields - &#x60;RESULT&#x60;: No clearing information - &#x60;FULL&#x60;: Full mode (default) | [optional] [default to undefined]

