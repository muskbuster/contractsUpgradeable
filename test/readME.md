## Test setup




### Audit prep checklist

- [x] Documentation (A plain english description of what you are building, and why you are building it. Should indicate the actions and states that should and should not be possible)
  - [x] For the overall system
  - [x] For each unique contract within the system
- [ ] Clean code
  - [ ] Run a linter (like [EthLint](https://www.ethlint.com/))
  - [x] Fix compiler warnings
  - [x] Remove TODO and FIXME comments
  - [ ] Delete unused code
- [ ] Testing
  - [ ] README gives clear instructions for running tests
  - [x] Testing dependencies are packaged with the code OR are listed including versions
- [ ] Automated Analysis
  - [ ] Analysis with [MythX](https://mythx.io/)
- [ ] Frozen code
  - [x] Halt development of the contract code
  - [ ] Provide commit hash for the audit to target
