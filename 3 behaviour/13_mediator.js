// Позволяет выстраивать тесную коммуникацию между обьектами разного типа, предоставляя централизованную абстракцию
class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const Alex = new User('Aleksandr')
const Vlad = new User('Vlad')
const Igor = new User('Igor')

const room = new ChatRoom()
room.register(Alex)
room.register(Vlad)
room.register(Igor)

Vlad.send('Hello', Igor)
Igor.send('Hello', Alex)
Alex.send(' Hi also')

