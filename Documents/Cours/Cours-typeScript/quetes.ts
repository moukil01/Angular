function hello(name):string {
    console.log("Hello " + name);
}

var firstName: string = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a, b) {
    return a + b;
}

var wcs:string = concat("Wild", concat("Code", "School"));
console.log(wcs);