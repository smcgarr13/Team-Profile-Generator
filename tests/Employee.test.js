const Employee = require('../lib/Employee.js');

test('Can set name via constructor argument', () => {
    const name = 'Mugi';
    const id = 813;
    const email = 'mugi@magical.com';
    const employee = new Employee(name, id, email);
    expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const id = 813;
    const employee = new Employee('Foo', id, 'mugi@magical.com');
    expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
    const email = 'mugi@magical.com';
    const employee = new Employee('Foo', 813, email);
    expect(employee.email).toBe(email);
});

test('getName() should return name', () => {
    const name = 'Mugi';
    const id = 813;
    const employee = new Employee(name, id, 'mugi@magical.com');
    expect(employee.getName()).toBe(name);
});

test('getId() should return id', () => {
    const id = 813;
    const email = 'mugi@magical.com';
    const employee = new Employee('Foo', id, email);
    expect(employee.getId()).toBe(id);
});

test('getEmail() should return email', () => {
    const email = 'mugi@magical.com';
    const employee = new Employee('Foo', 813, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const employee = new Employee('Foo', 813, 'mugi@magical.com');
    expect(employee.getRole()).toBe('Employee');
});