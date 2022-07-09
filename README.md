# limited-size-stack

Providing limited size stack for TypeScript.

## Overview

Providing limited size stack for TypeScript.

## Installation

```
$ npm i --save @cwola/limited-size-stack
```

## Usage

```
import {
    Stack,
    ROTATE
} from '@cwola/limited-size-stack';

const STACK = new Stack(/* capacity = */ 5);

STACK.push('one', 'two', 'three', 'four', 'five');
// STACK : ['one', 'two', 'three', 'four', 'five']

STACK.push('six');
// STACK : ['two', 'three', 'four', 'five', 'six']

console.log(STACK.top());
// output : 'six'

STACK.rotate(ROTATE.RIGHT);
// STACK : ['two', 'three', 'four', 'six', 'five']

STACK.dup();
// STACK : ['three', 'four', 'six', 'five', 'five']
```

## Method

- **constructor**
  ***
  - Description

    Constructor

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|
    | capacity | number | The maximum capacity of the stack.<br>If you specify a negative number, the capacity is unlimited. |

  - Return

    | Type | Description |
    |:---:|---|
    | Stack | Stack instance. |

- **push**
  ***
  - Description

    Push one or more elements onto the end of stack, removing the oldest element if the stack is full.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|
    | ...elements | Array`<any>` | input elements. |

  - Return

    | Type | Description |
    |:---:|---|
    | number | The new number of elements in the stack. |

  - example
    ```
    const stack = new Stack(3);

    stack.push('one', 'two');  // returns 2
    // stack : ['one', 'two']

    stack.push('three');  // returns 3
    // stack : ['one', 'two', 'three']

    stack.push('four');  // returns 3
    // stack : ['two', 'three', 'four']
    ```

- **pop**
  ***
  - Description

    Pop the element off the end of stack.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    tack.pop();  // returns 'three'
    // stack : ['one', 'two']
    ```

- **shift**
  ***
  - Description

    Shift an element off the beginning of stack.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the shifted element.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.shift();  // returns 'one'
    // stack : ['two', 'three']
    ```

- **top**
  ***
  - Description

    Returns the last element of stack.<br>
    <br>
    The topmost element is returned, but the stack size does not change<br>
    (meaning the element remains on the stack).

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.top();  // returns 'three'
    // stack : ['one', 'two', 'three']
    ```

- **bottom**
  ***
  - Description

    Returns the first element of stack.<br>
    <br>
    The bottom element is returned, but the stack size does not change<br>
    (meaning the element remains on the stack).

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the first element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.bottom();  // returns 'one'
    // stack : ['one', 'two', 'three']
    ```

- **at**
  ***
  - Description

    Takes an integer value and returns the element at that index.<br>
    <br>
    Supports relative indexing from the end of the stack when passed a negative index.<br>
    i.e. if a negative number is used, the element returned will be found by counting back<br>
    from the end of the stack.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|
    | index | number | The index (position) of the stack element to be returned. |

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the element in the stack matching the given index.<br>If stack is empty or index is out of bounds, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.at(1);  // returns 'two'
    // stack : ['one', 'two', 'three']

    stack.at(-2);  // returns 'two'
    // stack : ['one', 'two', 'three']
    ```

- **dup**
  ***
  - Description

    The top element is popped, and then pushed again (twice).<br>
    so that an additional copy of the former top element is now on top, with the original below it.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.dup();  // returns 'three'
    // stack : ['two', 'three', 'three']
    ```

- **swap**
  ***
  - Description

    Swap the two positions of the topmost elements on the stack.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.swap();  // returns 'two'
    // stack : ['one', 'three', 'two']
    ```

- **rotate**
  ***
  - Description

    Rotate the topmost n items to move on the stack.<br>
    <br>
    The n topmost items are moved on the stack in a rotating fashion.<br>
    'n' is the number of elements to rotate (but if you specify '0', the target will be all elements).<br>
    so, if you specify '2', it becomes 'swap'.<br>
    <br>
    Two variants of this operation are possible, left rotate and right rotate.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|
    | direction | ROTATE | ROTATE.RIGHT or ROTATE.LEFT |
    | n | number | number of elements to rotate |

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.rotate(ROTATE.RIGHT, 0);  // returns 'two'
    // stack : ['three', 'one', 'two']

    stack.rotate(ROTATE.LEFT, 2);  // returns 'three'
    // stack : ['one', 'two', 'three']
    ```

- **reverse**
  ***
  - Description

    Reverse the order of the elements on stack.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | any | Returns the last element of stack.<br>If stack is empty, 'undefined' will be returned. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.reverse();  // returns 'one'
    // stack : ['three', 'two', 'one']
    ```

- **size**
  ***
  - Description

    Get number of elements.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | number | Number of elements. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.size();  // returns 3
    // stack : ['one', 'two', 'three']
    ```

- **isEmpty**
  ***
  - Description

    Returns True if the stack is empty, false otherwise.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | Boolean | Returns True if the stack is empty, false otherwise. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.isEmpty();  // returns False
    // stack : ['one', 'two', 'three']

    stack.clear();
    stack.isEmpty;  // returns True
    // stack : []
    ```

- **clear**
  ***
  - Description

    Clear all elements.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | Stack | this. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    stack.clear();  // returns stack
    // stack : []
    ```

- **clone**
  ***
  - Description

    Clone this stack.<br>
    <br>
    The stack property is shallow-copied.

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | Stack | new Stack instance. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    const copied = stack.clone();
    stack.push('four');
    // stack : ['two', 'three', 'four']
    // copied : ['one', 'two', 'three']
    ```

- **toArray**
  ***
  - Description

    To array (shallow-copied).

  - Arguments

    | Name | Type | Description |
    |---|:---:|---|

  - Return

    | Type | Description |
    |:---:|---|
    | Array`<any>` | array. |

  - example
    ```
    const stack = new Stack(3);
    stack.push('one', 'two', 'three');
    // stack : ['one', 'two', 'three']

    const arr = stack.toArray();
    stack.push('four');
    // stack : ['two', 'three', 'four']
    // arr : ['one', 'two', 'three']
    ```


## Licence

[MIT](https://github.com/cwola/npm-limited-capacity-stack/blob/main/LICENSE)
