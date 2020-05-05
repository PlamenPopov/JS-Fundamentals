function solve(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meaw() {
            console.log(`${this.name},${this.age} years say meaw!`)
        }
    }

    let cats = [];

    for (let i = 0; i < arr.length; i++) {
        let catInfo = arr[i].split(' ');
        let name, age;

        [name, age] = [catInfo[0], catInfo[1]];

        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.meaw();
    }






}

solve(["Meloow 2", "Cat 5"])