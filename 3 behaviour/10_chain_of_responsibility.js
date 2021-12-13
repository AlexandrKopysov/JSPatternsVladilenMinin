// Ползволяют улучшить коммуникацию между обьектами разного типа
class MySumm {
    constructor(initialValue = 42) {
        this.sum = initialValue
    }
    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySumm()
// Цепочка вызовов
console.log(sum1.add(8).add(10).add(9).sum)