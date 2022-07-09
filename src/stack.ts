

const ROTATE = {
    RIGHT: 0,
    LEFT: 1,
} as const;
export type ROTATE = typeof ROTATE[keyof typeof ROTATE];

/**
 * A stack with a maximum capacity.
 *
 * @public
 */
export class Stack {
    /**
     * stack.
     */
    protected stack: Array<any>;

    /**
     * Maximum capacity of this stack.
     * If you specify a negative number, the capacity is unlimited.
     */
    protected capacity: number;


    /**
     * @param {number} capacity - The maximum capacity of the stack.
     *
     * @throws Error
     */
    constructor(capacity: number) {
        this.stack = [];
        this.capacity = capacity;
    }

    /**
     * Push one or more elements onto the end of stack,
     * removing the oldest element if the stack is full.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     *
     * stack.push('one', 'two');  // returns 2
     * // stack : ['one', 'two']
     *
     * stack.push('three');  // returns 3
     * // stack : ['one', 'two', 'three']
     *
     * stack.push('four');  // returns 3
     * // stack : ['two', 'three', 'four']
     *
     *
     * ```
     *
     * @param {Array<any>} ...elements - input elements.
     * @return {number} The new number of elements in the stack.
     */
    push(...elements: any[]): number {
        if (this.capacity === 0) {
            return this.size();
        }

        let newStack = this.stack.concat(elements);
        if (this.capacity > 0 && newStack.length > this.capacity) {
            newStack = newStack.slice(-1 * this.capacity);
        }
        this.stack = newStack;
        return this.size();
    }

    /**
     * Pop the element off the end of stack.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.pop();  // returns 'three'
     * // stack : ['one', 'two']
     *
     *
     * ```
     *
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    pop(): any|undefined {
        return this.stack.pop();
    }

    /**
     * Shift an element off the beginning of stack.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.shift();  // returns 'one'
     * // stack : ['two', 'three']
     *
     *
     * ```
     *
     * @return {any} Returns the shifted element.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    shift(): any|undefined {
        return this.stack.shift();
    }

    /**
     * Returns the last element of stack.
     *
     * @remarks
     * The topmost element is returned,
     * but the stack size does not change
     * (meaning the element remains on the stack).
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.top();  // returns 'three'
     * // stack : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    top(): any {
        return this.at(-1);
    }

    /**
     * Returns the first element of stack.
     *
     * @remarks
     * The bottom element is returned,
     * but the stack size does not change
     * (meaning the element remains on the stack).
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.bottom();  // returns 'one'
     * // stack : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @return {any} Returns the first element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    bottom(): any {
        return this.at(0);
    }

    /**
     * Takes an integer value and returns the element at that index.
     *
     * @remarks
     * Supports relative indexing from the end of the stack
     * when passed a negative index.
     *
     * i.e. if a negative number is used, the element returned will be found
     * by counting back from the end of the stack.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.at(1);  // returns 'two'
     * // stack : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @param {number} index - The index (position) of the stack element
     * to be returned.
     * @return {any} Returns the element in the stack matching the given index.
     * If stack is empty or index is out of bounds,
     * 'undefined' will be returned.
     *
     * @public
     *
     */
    at(index: number): any|undefined {
        if (index < 0) {
            index = this.size() + index;
        }
        return this.stack[index];
    }

    /**
     * The top element is popped, and then pushed again (twice).
     *
     * @remarks
     * The top element is popped, and then pushed again (twice),
     * so that an additional copy of the former top element is now on top,
     * with the original below it.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.dup();  // returns 'three'
     * // stack : ['two', 'three', 'three']
     *
     *
     * ```
     *
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    dup(): any|undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        this.push(this.top());
        return this.top();
    }

    /**
     * Swap the two positions of the topmost elements on the stack.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.swap();  // returns 'two'
     * // stack : ['one', 'three', 'two']
     *
     *
     * ```
     *
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    swap(): any|undefined {
        return this.rotate(ROTATE.RIGHT, 2);
    }

    /**
     * Rotate the topmost n items to move on the stack.
     *
     * @remarks
     * The n topmost items are moved on the stack in a rotating fashion.
     *
     * 'n' is the number of elements to rotate
     * (but if you specify '0', the target will be all elements).
     * so, if you specify '2', it becomes 'swap'.
     *
     * For example, if n = 3, items 1, 2, and 3 on the stack
     * are moved to positions 2, 3, and 1 on the stack, respectively.
     *
     * Two variants of this operation are possible,
     * left rotate and right rotate.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.rotate(ROTATE.RIGHT, 0);  // returns 'two'
     * // stack : ['three', 'one', 'two']
     *
     * stack.rotate(ROTATE.LEFT, 2);  // returns 'three'
     * // stack : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @param {ROTATE} direction - ROTATE.RIGHT or ROTATE.LEFT
     * @param {number} n - number of elements to rotate
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    rotate(direction: ROTATE, n: number): any|undefined {
        if (!Number.isInteger(n) || this.isEmpty()) {
            return undefined;
        }
        if (direction !== ROTATE.LEFT) {
            // right rotate is default.
            direction = ROTATE.RIGHT;
        }
        if (n === 0 || n < 0) {
            n = this.size();
        }
        if (n === 1) {
            return this.top();
        }

        const args = [];
        for (let i = n; i--;) {
            args.push(this.pop());
        }

        switch (direction) {
            case ROTATE.RIGHT:
                this.push(args.shift());
                args.reverse();
                this.push(...args);
                break;
            case ROTATE.LEFT:
                const tmp = args.pop();
                args.reverse();
                args.push(tmp);
                this.push(...args);
                break;
            default:
                break;
        }
        return this.top();
    }

    /**
     * Reverse the order of the elements on stack.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.reverse();  // returns 'one'
     * // stack : ['three', 'two', 'one']
     *
     *
     * ```
     *
     * @return {any} Returns the last element of stack.
     * If stack is empty, 'undefined' will be returned.
     *
     * @public
     */
    reverse(): any|undefined {
        this.stack.reverse();
        return this.top();
    }

    /**
     * Get number of elements.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.size();  // returns 3
     * // stack : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @return {number} Number of elements.
     *
     * @public
     */
    size(): number {
        return this.stack.length;
    }

    /**
     * Returns True if the stack is empty, false otherwise.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.isEmpty();  // returns False
     * // stack : ['one', 'two', 'three']
     *
     * stack.clear();
     * stack.isEmpty;  // returns True
     * // stack : []
     *
     *
     * ```
     *
     * @return {boolean} Returns True if the stack is empty, false otherwise.
     *
     * @public
     */
    isEmpty(): boolean {
        return this.size() < 1;
    }

    /**
     * Clear all elements.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * stack.clear();  // returns stack
     * // stack : []
     *
     *
     * ```
     *
     * @return {Stack} this
     *
     * @public
     */
    clear(): Stack {
        this.stack = [];
        return this;
    }

    /**
     * Clone this stack.
     *
     * @remarks
     * The stack property is shallow-copied.
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * const copied = stack.clone();
     * stack.push('four');
     * // stack : ['two', 'three', 'four']
     * // copied : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @return {Stack} new Stack instance.
     *
     * @public
     */
    clone(): Stack {
        const stack = new Stack(this.capacity);
        stack.stack = this.toArray();
        return stack;
    }

    /**
     * To array (shallow-copied).
     *
     * @example
     * ```ts
     * const stack = new Stack(3);
     * stack.push('one', 'two', 'three');
     * // stack : ['one', 'two', 'three']
     *
     * const arr = stack.toArray();
     * stack.push('four');
     * // stack : ['two', 'three', 'four']
     * // arr : ['one', 'two', 'three']
     *
     *
     * ```
     *
     * @return {Array<any>} array.
     *
     * @public
     */
    toArray(): Array<any> {
        return this.stack.concat();
    }
}
