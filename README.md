# Get random item base on percentage

```javascript

const { chance } = require('chance-percent')
// import { chance } from 'chance-percent'

const options = [
  {value: 1, percentage: 10},
  {value: 3, percentage: 60},
  {value: 2, percentage: 30},
]

console.log(chance(options))

```
