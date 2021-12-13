// Позволяет нам ставить ловушки на поля обьектов, вызов функции , что позволяет очень гибко определять работу приложения
function networkFetch(url) {
    return `${url} - Server ancwer`
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if (cache.has(url)) {
            return `${url} - Cache ancwer`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('react.io'))