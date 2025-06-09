const person = {
    firstName:"윤지",
    lastName:"오",
    //아래에 매서드를 만듭니다
    fullName : function () {
        return this.lastName +  " " + this.firstName;
    }
}

const member = {
    firstName:"진희",
    lastName:"이",
}

let fullName = person.fullName.bind(member);

document.getElementById("demo").innerHTML = fullName();