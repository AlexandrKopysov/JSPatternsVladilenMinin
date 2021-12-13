// Существует класс в приложении, и может быть лишь 1 инстанс данного класса

class Database {
    // Если при создании класса instance существует , то вернуть его
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mysql = new Database('MySQL');
console.log(mongo.getData());