let firstName = "Petr"; // ? Probíhá implicitní určení typu - nastavuju přímo hodnotu
//firstName = true;
firstName = "ADAM";
console.log(firstName);

// * Doporučené použití typové anotace:
let lastName: string;
lastName = "Fifka";
lastName = "Veselý";
console.log(lastName);

let isPlaywright: boolean;
isPlaywright = true;
isPlaywright = false;
console.log(isPlaywright);

const cities: string[] = ["Praha", "Beroun"];
console.log(cities);
