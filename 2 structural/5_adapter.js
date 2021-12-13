// Позволяет интегрировать старый интерфейс класса в новый интерфейс, и позволяет работать совместно
class OldCalc {
    operations(t1,t2,operation){
        switch(operation){
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc{
    add(t1,t2){
        return t1 + t2
    }
    sub(t1,t2){
        return t1 - t2
    }
}

class CalcAdapter {
    constructor(){
        this.calc = new NewCalc();        
    }

    operations(t1,t2,operation){
        switch(operation){
            case 'add': return this.calc.add(t1,t2)
            case 'sub': return this.calc.sub(t1,t2)
            default: return NaN
        }
    }
}

// Старвый калькулятор
const oldCalc = new OldCalc();
console.log(oldCalc.operations(10,5,'add'));

// Новый калькулятор
const newCalc = new NewCalc();
console.log(newCalc.add(10,5));

// Интерфейс старый , но пользуемся новым функционалом
const adapter = new CalcAdapter();
console.log(adapter.operations(25,10,'sub'))