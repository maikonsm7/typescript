// create class mode 1
export class Enterprise {
    public readonly name: string;
    protected readonly cnpj: string;
    private readonly employees: Employees[] = [];

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addEmployee(employee: Employees): void {
        this.employees.push(employee);
    }

    showEmployees(): void {
        this.employees.forEach((employee, i) => {
            console.log(`${i + 1}: ${employee.name}`);
        });
    }
}

// create class mode 2 (very well)
export class Employees {
    constructor(
        public readonly name: string,
    ) {}
}

const enterprise1 = new Enterprise('Tech Corp', '12.345.678/0001-99');
const employee1 = new Employees('Alice');
const employee2 = new Employees('Bob');
enterprise1.addEmployee(employee1);
enterprise1.addEmployee(employee2);
console.log(enterprise1.name); // Tech Corp
enterprise1.showEmployees();
