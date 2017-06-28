# chain

Libraries like Greensock and Jquery have their own ways of doing this, but I tend to prefer single-purpose tools that stay close to the spec.

## Usage 

```javascript
const myChain = [
  {
    run: func1,
    after: 500
  },
  {
    run: func2,
    after: 750
  }
];

 chain(myChain);
```
