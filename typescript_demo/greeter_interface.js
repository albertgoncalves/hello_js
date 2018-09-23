/* tslint:disable: trailing-comma*/
/* tslint:disable: typedef-whitespace */
/* tslint:disable: interface-name*/
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
