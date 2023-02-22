const Employee = require('../lib/Employee.js');

test('Can set name via constructor argument', () => {
    const name = 'Unicorn-1';
    const id = 1;
    const email = 'unicorn@magical.com';
    const employee = new Employee(name, id, email);
    expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const id = 1;
    const employee = new Employee('Foo', id, 'unicorn@magical.com');
    expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
    const email = 'unicorn@magical.com';
    const employee = new Employee('Foo', 1, email);
    expect(employee.email).toBe(email);
});

test('getName() should return name', () => {
    const name = 'Unicorn-1';
    const id = 1;
    const employee = new Employee(name, id, 'unicorn@magical.com');
    expect(employee.getName()).toBe(name);
});

test('getId() should return id', () => {
    const id = 1;
    const email = 'unicorn@magical.com';
    const employee = new Employee('Foo', id, email);
    expect(employee.getId()).toBe(id);
});

test('getEmail() should return email', () => {
    const email = 'unicorn@magical.com';
    const employee = new Employee('Foo', 1, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const employee = new Employee('Foo', 1, 'unicorn@magical.com');
    expect(employee.getRole()).toBe('Employee');
});