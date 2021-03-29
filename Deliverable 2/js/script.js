let name = prompt("Name your pet.")

let happy = 0
let energy = 0

for (let i = 0; i<=5; i++) {
    let input = prompt("feed, pet, or walk?")

    if(input === "feed"){
        energy = energy + 2
    }
    else if(input === "pet"){
        happy= happy + 1
    }
    else if(input === "walk"){
        if (energy === 0){
            alert("Not enough energy to enjoy a walk.")
        }else{
            happy = happy + 2
            energy = energy - 1
        }
    }
}
alert(name+" has "+ happy + " happiness and " + energy + " energy.")
console.log(name+" has "+ happy + " happiness and " + energy + " energy.")