class Queue {
    #queue = []

    get queue() {
        return this.#queue;
    }

    enqueue(element) {
        this.#queue.push(element);
    }

    dequeue() {
        return this.#queue.shift();
    }
}
