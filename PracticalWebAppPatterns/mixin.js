let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    }
}

class User {
    name
}

Object.assign(User.prototype, sayHiMixin);