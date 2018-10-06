// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// $ tslint greeter_interface.ts; tsc greeter_interface.ts;

declare var document : Document;

interface Person { firstName: string;
                   lastName : string;
                 }

function greeter(person: Person) {
    return ( "Hello, "
           + person.firstName
           + " "
           + person.lastName
           );
}

let user = { firstName: "Jane"
           , lastName : "Doe"
           };

document.body.innerHTML = greeter(user);
