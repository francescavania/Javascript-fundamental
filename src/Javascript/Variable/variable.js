let a=12
console.log("hahahahha")

function checkvar(){
    console.log(a)
}

checkvar()

//why not use var
function varTest() {
    var x = 1;
    {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}
varTest()

function letTest() {
    let x1 = 1;
    {
        let x1 = 2;  // same variable!
        console.log(x1);  // 2
    }
    console.log(x1);  // 1
}
letTest()