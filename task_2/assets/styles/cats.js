
class Cat 
{
constructor(
    catname,
    ownername,
    contact,
    catType,
    foodArray,
    gender,
    comment,
    )
    {
        this.catname = catname;
        this.ownername = ownername;
        this.contact = contact;
        this.catType = catType;
        this.foodArray = foodArray;
        this.gender = gender;
        this.comment = comment;
    }
}



let errors = [];

function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing){
        errors.push('Поле'+  ' '+ input.placeholder + ' '+ 'не заполнено');
    }
    if (validity.patternMismatch){
        errors.push('Неверный формат заполнения')
    }
   
}

function checkAll(testEvent){
    errors = [];
    testEvent.preventDefault();
    let inputs = document.querySelectorAll('input[type="text"],input[type="tel"],textarea[name="comment"],input[type="file"]');
    for (let input of inputs){
        checkValidity(input);
    }
    if (document.querySelectorAll('input[name="sex"]:checked').length==0){
        errors.push( "Пожалуйста, выберите пол питомца" );
        }
    if (document.querySelector('select option:checked').value==""){
        errors.push( "Пожалуйста, укажите породу питомца" );
        }
    if (document.querySelectorAll('input[name="food"]:checked').length==0){
        errors.push( "Пожалуйста, укажите, чем питается ваш питомец" );
        }
    document.getElementById('errorsInfo').innerHTML=errors.join('.<br>');

    let foodArray = document.querySelectorAll('input[name="food"]:checked');
    let return_food = [];
    (function() {
        for (var i=0; i<foodArray.length; i++) { 
            return_food.push(foodArray[i].dataset.description)
            }
        return return_food;})();

    let gender = document.querySelectorAll('input[name="sex"]:checked');
    let return_gender = [];
    (function(){
        for (var i=0; i<gender.length; i++) {
            return_gender.push(gender[i].dataset.description)
        }
        return return_gender;
    })();

    let cat1 = new Cat(
        document.querySelector("#catname").value,
        document.querySelector("#ownername").value,
        document.querySelector("#contact").value,
        document.querySelector("#breed").options[document.querySelector("#breed").selectedIndex].text,
        return_food,
        return_gender,
        document.querySelector("#comment").value
    )
    console.log(cat1);
}



document.querySelector("button").addEventListener('click', checkAll);





