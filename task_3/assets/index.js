//задаю класс калькулятору

class Calculator 
{
    constructor(a, b) {
        this.a = Number(a);
        this.b = Number(b);
    }
    sum() {
        return (this.a + this.b);
    }
    min() {
        return (this.a - this.b);
    }
    multiply() {
        return (this.a * this.b);
    }
    divide() {

        if (this.b == 0) {
            return false;
        }

        return (this.a / this.b);
    }
}

    let a = document.querySelector('input[id="a"]');
    let b = document.querySelector('input[id="b"]');


//задаю функцию суммы, которая будет вызываться при клике 

function sum(){
    //я создаю экземпляр калькулятора с параметрами a и b, которые являются свойством(параметром) value html объекта(элемента) (input с параметром id - a и b), который является результатом выполнения метода querySelector объекта document

    let calc = new Calculator(
        a.value,
        b.value
    );

    //при вводе 2 параметров и клике на кнопку суммы мы запускаем функцию суммы и выводим результат в пустой div с id result

    //html коду элемента div с параметром id - result присваивается значение функции (метода) log объекта console, а параметром этой функции является результат выполнения функции sum экземпляра объекта calc, который явялется экземпляром объекта calculator
    //PS напомню себе, что функция console.log лишь выводит параметры в консоль браузера и ничего не возвращает

    let sumResult = calc.sum();

    document.querySelector('div[id="result"]').innerHTML = sumResult;
}


//беру объект document, вызываю у него метод querySelector, который ищет элемент по его CSS пути
/*
путь состоит из html элемента button со свойством id sumBtnН, который сам по себе тоже является объектом, ведь html - это DOM - document object model

У объекта html элемента button со свойством id sumBtnН я вызываю метод (функцию) addEventListener, который при событии click, которое явдяется первым параметром этой функции, начинает выполнять функцию sum
*/
document.querySelector("button[id='sumBtn']").addEventListener('click', sum)



function min(){

    let calc = new Calculator(
        a.value,
        b.value
    );

    let minResult = calc.min();

    document.querySelector('div[id="result"]').innerHTML = minResult;
}

document.querySelector("button[id='minBtn']").addEventListener('click', min)



function multiply(){

    let calc = new Calculator(
        a.value,
        b.value
    );

    let multiplyResult = calc.multiply();

    document.querySelector('div[id="result"]').innerHTML = multiplyResult;
}

document.querySelector("button[id='multBtn']").addEventListener('click', multiply)


function divide(){

    let calc = new Calculator(
        a.value,
        b.value
    );

    let divideResult = calc.divide();

    document.querySelector('div[id="result"]').innerHTML = divideResult;
}

document.querySelector("button[id='divideBtn']").addEventListener('click', divide)