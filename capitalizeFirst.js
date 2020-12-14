const assert = require('assert');

function capitalizeFirst(input) {

    return input.length > 0
  
      ? input.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
  
      : '';
  
  }

// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirst, 'function');


// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirst.length, 1);


assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');


// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirst('z'), 'Z');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirst(''), '');

