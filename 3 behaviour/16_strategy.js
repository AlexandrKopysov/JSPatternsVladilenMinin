// Позволяет создавать оболочку для различных интерфейсов, что бы мы молги использовать разные алгоритмы и интерфейсы в разных задачах

class Vehicle {
    travelTime() {
        return this.timetaken
    }
}

class Buss extends Vehicle {
    constructor() {
        super()
        this.timetaken = 10
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timetaken = 5
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timetaken = 3
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Buss()))
console.log(commute.travel(new Car()))