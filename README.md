# Get random item base on percentage


## Simple usage
```javascript
import { random } from 'chance-percent';

const options = [
  {value: 1, percentage: 10},
  {value: 3, percentage: 60},
  {value: 2, percentage: 30},
]

const value = random(options); // return 1, 2, 3

```

## Typing usage

```typescript
import { random, ChanceOption } from 'chance-percent';

interface User {
    age: number;
    name: string;
}

const users = [{ age: 20, name: 'bob' }, { age: 40, name: 'jonh' }]

const options: ChanceOption<User>[] = [
  {value: users[1], percentage: 40},
  {value: users[2], percentage: 60},
]

const winner: User = random<User>(options);
```
