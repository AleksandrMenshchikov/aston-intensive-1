class Stack {
    #stack = []

    get stack() {
        return this.#stack;
    }

    push(element) {
        this.#stack.push(element);
    }

    pop() {
        return this.#stack.pop();
    }
}
