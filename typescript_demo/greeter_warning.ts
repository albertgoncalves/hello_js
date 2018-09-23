// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// $ tsc greeter_warning.ts

function greeter(person: string) {
    return "Hello, " + person
}

// let user = "Jane User" <- this would compile without warning
let user = [0, 1, 2] //   <- this throws a warning (despite .js being created)

document.body.innerHTML = greeter(user)
