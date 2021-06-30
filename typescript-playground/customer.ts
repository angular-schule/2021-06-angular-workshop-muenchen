export class Customer {

    // private id: number; // Property
    protected readonly name?: string; // optional

    constructor(private id: number) {
        // this.id = id;
        const foo = ''; // Variable
        function bar() {} // Funktion
    }

    // Methode
    foobar(foo: string): string {
        console.log('first', this.id);

        // Arrow-Funktion besitzt keinen eigenen this-Kontext
        setTimeout(() => {
            console.log('foo', this.id);
        }, 2000);

        return '';
    }
}

export const foo = '';
export function bar() {}