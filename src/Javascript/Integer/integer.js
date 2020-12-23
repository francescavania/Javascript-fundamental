const angkaUs = prompt('masukan angka : ');
function modulus(){
    if (angkaUs%2===0) {
        console.log("genap")
    } else {
        console.log("ganjil")
    }
}

modulus()

let comparison ='10'
let comparison1 = 10
console.log(comparison==comparison1)//true
console.log(comparison===comparison1)//false

const tenary = comparison1<20 ? true : false
console.log(tenary)