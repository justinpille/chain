# chain

Libraries like Greensock and JQuery have their own ways of doing this, but I tend to prefer single-purpose tools that stay close to the spec.

## Usage 

```javascript

// Make a chain for later
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

// Run it
 chain(myChain);
```


## TODO

- Add examples of nesting and recursion
- Add examples of appending chains together (just JavaScript)
- Use `requestAnimationFrame`?
- Accept maps instead of arrays of objects?
- Create a merge function: After calculating the absolute time it will superimpose the timelines together.
- Add ways to modify entire chains: scaling, scaling exponentially (or using a timing function) from anywhere in the chain, adding or subtracting an equal amount from all links.
