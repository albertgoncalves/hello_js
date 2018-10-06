// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
function greeter(person) {
    return ("Hello, "
        + person.firstName
        + " "
        + person.lastName);
}
var user = { firstName: "Jane",
    lastName: "Doe"
};
document.body.innerHTML = greeter(user);
