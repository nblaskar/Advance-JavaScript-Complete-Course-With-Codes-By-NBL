/*
//Example-1
//default Import of Class
import Nokia from "./mobile.js";
const n = new Nokia();
n.volumeUp();

//Example-2
//default Import of function
import show from "./mobile.js";
show();

//Example-3
//default Export of a Variable
import a from "./mobile.js";
console.log(a);

//Example-4
//Named Export of a class
import { Nokia } from "./mobile.js";
const n = new Nokia();
n.volumeUp();

//Example-5
//Named Export of a Function
import { show } from "./mobile.js";
show();

//Example-6
//Named Export of a variable
import { a } from "./mobile.js";
console.log(a);

//Example-7
//Multiple named Import
import { Nokia, show, a } from "./mobile.js";
const n = new Nokia();
n.volumeUp();
show();
console.log(a);

//Example-8
//Multiple named Import as an object
import * as device from "./mobile.js";
const n = new device.Nokia();
n.volumeUp();
device.show();
console.log(device.a);
*/
//Example-9
////Named and Default Import at time
import Nokia, { show, a } from "./mobile.js";
const n = new Nokia();
n.volumeUp();
show();
console.log(a);
