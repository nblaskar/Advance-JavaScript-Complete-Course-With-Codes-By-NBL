/*
//Example-1
//default Export of Class
export default class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}

//in short form
class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}
export default Nokia;


//Example-2
//default Export of function
export default function show() {
  console.log("Hello Module");
}

//in short form
function show() {
  console.log("Hello Module");
}
export default show;

//Example-3
//default Export of a Variable
const a = 10;
export default a;

//Example-4
//Named Export of a Class
export class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}

//in short form
class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}
export { Nokia };

//Example-5
//Named Export of a F;unction
export function show() {
  console.log("Hello Module");
}

//in hort Form
function show() {
  console.log("Hello Module");
}
export { show };

//Example-6
//Named Export of a variable
export const a = 10;

//also can use as
const a = 10;
export { a };

//Example-7
//Multiple named Export
class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}
function show() {
  console.log("Hello Module");
}
export const a = 10;
export { Nokia, show };

//Example-8
//Multiple named Export as a boject
class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}
function show() {
  console.log("Hello Module");
}
export const a = 10;
export { Nokia, show };
*/
//Example-9
//Named and Default Export at time
class Nokia {
  volumeUp() {
    console.log("High Volume");
  }
}
function show() {
  console.log("Hello Module");
}
export const a = 10;
export default Nokia;
export { show };
