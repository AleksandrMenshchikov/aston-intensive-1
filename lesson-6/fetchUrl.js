class RequestError extends Error {
    constructor(status, statusText, message, path) {
        super(message);
        this.name = "RequestError";
        this.status = status;
        this.statusText = statusText;
        this.path = path
    }
}

async function fetchUrl(url, amountOfAttempts, timeout) {
    if (!amountOfAttempts || amountOfAttempts <= 0) {
        return null;
    }
    amountOfAttempts -= 1

    try {
        const response = await fetch(url, {
            signal: AbortSignal.timeout(timeout),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new RequestError(
                response.status,
                response.statusText,
                data.message,
                new URL(response.url).pathname);
        }

        return data;
    } catch (error) {
        if (error instanceof RequestError) {
            throw error;
        } else {
            if (amountOfAttempts > 0) {
                await new Promise(resolve => {
                    const t = setTimeout(() => {
                        clearTimeout(t)
                        resolve()
                    }, timeout)
                });
                await fetchUrl(url, amountOfAttempts, timeout);
            } else {
                throw error;
            }
        }
    }
}

fetchUrl("https://jsonplaceholder.typicode.com/todos/1", 5, 3000)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error)
    })
