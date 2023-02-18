# Primary use cases

## BTC yield (passive only) (iBTC supply use case)

### What

Long BTC

- Deposit BTC via bridge to get iBTC
- Deposit iBTC into lending to get ciBTC
- Earn yield on iBTC

- Interface: BTC yield shows estimated APR; dropdown of what is actually happening

## BTC yield (leveraged with automatic payback option) (borrow USDT use case & AMM LP use case)

### What

Long BTC

- Deposit BTC via bridge to get iBTC
- Deposit part of iBTC into lending to get ciBTC
- Earn yield on iBTC
- Borrow USDT against iBTC
- Pay borrow fees on low payback
- Supply USDT and other part of iBTC into AMM
- Earn iBTC/USDT trading fees

- Interface: BTC yield shows estimated APR; dropdown of what is actually happening

## BTC yield leveraged (borrow USDT use case)

### What

BTC long

- Deposit BTC via bridge to get iBTC
- Deposit iBTC into lending protocol
- Borrow USDT (or whatever has low borrow rates)
- Swap USDT for iBTC -> rinse and repeat possibly

- Interface: BTC yield shows estimated APR; dropdown of what is actually happening

## DOT yield with BTC (iBTC borrow use case)

### What 

BTC long
DOT long

- Deposit iBTC into lending to get ciBTC
- Earn yield on iBTC
- Borrow iBTC against iBTC
- Buy DOT/stDOT/sDOT (any yield generating asset) with iBTC
- Earn DOT interest

- Interface: Select BTC plus yield asset e.g., stDOT; show APR and what happens under the hood

## USDT passive income (USDT supply use case)

### What

USDT long

- Supply USDT to lending protocol
- Earn yield

# Great UX

## High: Tx Fees

- Bring your own tx fees: Allow users to pay tx fees with DOT and other Dotsama assets
- Give free INTR to BTC holders

## High: One-click strategies

- Give users predefined strategies they can execute ideally in a single tx (two in case they need to bridge BTC)

## Medium: Hardware wallet support

- Ledger support for low risk users for lending protocol and bridge

## Medium: Institutional

- Fireblocks (or other custodian) integration

## Low: Offer automatic closing of borrow positions

- If not possible to automatically close borrow position if price drops as can't get the same USDT back
  - Could cap earnings: automatically unwind position if profit of X is reached
- If BTC price drops, borrow position is at risk. Could automatically close borrow position if users would pay for that service:
  - Withdraw USDT/iBTC from pool -> will be more iBTC, less USDT than initially supplied if price dropped
  - Sell iBTC for USDT
  - Pay back USDT loan
  - Receive initial iBTC

## Low: Notification systems

- If risky position needs action, notify users. Explain what happened and how to resolve situation

