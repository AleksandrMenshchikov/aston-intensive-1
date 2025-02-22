Promise.reject("a") // Promise {<rejected>: 'a'}
    .catch(p => p + "b") // Promise {<fulfilled>: 'ab'}
    .catch(p => p + "c")
    .then(p => p + "d") // Promise {<fulfilled>: 'abd'}
    .then(p => p + "f") // Promise {<fulfilled>: 'abdf'}
    .catch(p => p + "h")
    .finally(p => p + "e")
    .then(p => console.log(p)) // abdf
