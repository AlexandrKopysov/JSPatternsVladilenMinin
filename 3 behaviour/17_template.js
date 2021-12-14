// ООпределяет скелет будущего алгоритма , делегируя реализацию функционала на дочерние классы
class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {

    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`
    }

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Процесс создания программ'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Процесс тестирования'
    }
}

const dev = new Developer('Alex', 100000);
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Vika', 90000);
console.log(tester.getPaid())
console.log(tester.work())