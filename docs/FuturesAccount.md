# FuturesAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **string** | Balance, only applicable to classic contract account.The balance is the sum of all historical fund flows, including historical transfers in and out, closing settlements, and transaction fee expenses, but does not include upl of positions.total &#x3D; SUM(history_dnw, history_pnl, history_fee, history_refr, history_fund) | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**positionMargin** | **string** | Deprecated | [optional] [default to undefined]
**orderMargin** | **string** | initial margin of all open orders | [optional] [default to undefined]
**available** | **string** | Refers to the available withdrawal or trading amount in per-position, specifically the per-position available balance under the unified account that includes the credit line (which incorporates trial funds; since trial funds cannot be withdrawn, the actual withdrawal amount needs to deduct the trial fund portion when processing withdrawals) | [optional] [default to undefined]
**point** | **string** | Point card amount | [optional] [default to undefined]
**currency** | **string** | Settlement currency | [optional] [default to undefined]
**inDualMode** | **boolean** | Whether Hedge Mode is enabled | [optional] [default to undefined]
**positionMode** | **string** | Position mode: single - one-way, dual - dual-side, split - sub-positions (in_dual_mode is deprecated) | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account mode is enabled | [optional] [default to undefined]
**positionInitialMargin** | **string** | Initial margin occupied by positions, applicable to unified account mode | [optional] [default to undefined]
**maintenanceMargin** | **string** | Maintenance margin occupied by positions, applicable to new classic account margin mode and unified account mode | [optional] [default to undefined]
**bonus** | **string** | Bonus | [optional] [default to undefined]
**enableEvolvedClassic** | **boolean** | Deprecated | [optional] [default to undefined]
**crossOrderMargin** | **string** | Cross margin order margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossInitialMargin** | **string** | Cross margin initial margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMaintenanceMargin** | **string** | Cross margin maintenance margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossUnrealisedPnl** | **string** | Cross margin unrealized P&amp;L, applicable to new classic account margin mode | [optional] [default to undefined]
**crossAvailable** | **string** | Cross margin available balance, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMarginBalance** | **string** | Cross margin balance, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMmr** | **string** | Cross margin maintenance margin rate, applicable to new classic account margin mode | [optional] [default to undefined]
**crossImr** | **string** | Cross margin initial margin rate, applicable to new classic account margin mode | [optional] [default to undefined]
**isolatedPositionMargin** | **string** | Isolated position margin, applicable to new classic account margin mode | [optional] [default to undefined]
**enableNewDualMode** | **boolean** | Deprecated | [optional] [default to undefined]
**marginMode** | **number** | Margin mode of the account 0: classic future account or Classic Spot Margin Mode of unified account; 1:  Multi-Currency Margin Mode; 2:  Portoforlio Margin Mode; 3:  Single-Currency Margin Mode | [optional] [default to undefined]
**enableTieredMm** | **boolean** | Whether to enable tiered maintenance margin calculation | [optional] [default to undefined]
**history** | [**FuturesAccountHistory**](FuturesAccountHistory.md) |  | [optional] [default to undefined]

