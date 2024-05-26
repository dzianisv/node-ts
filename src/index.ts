class A {
    a: string;
    b?: string;

    constructor() {
        this.a = 'hello';
    }
}


const a = new A();
console.log(a.a, a.b);