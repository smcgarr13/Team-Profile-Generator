// const Employee = require('./Employee')
const Employee = require('../lib/Employee');

test('Can set name via constructor argument', () => {
    const name = 'Mugi';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const id = 813;
    const employee = new Employee('Foo', id);
    expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
    const email = 'mugi@magical.com';
    const employee = new Employee('Foo', 1, email);
    expect(employee.email).toBe(email);
});

test('getName() should return name', () => {
    const name = 'Mugi';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('getId() should return id', () => {
    const name = '813';
    const employee = new Employee('Foo', id);
    expect(employee.getId()).toBe(id);
});

test('getEmail() should return email', () => {
    const email = 'mugi@magical.com';
    const employee = new Employee('Foo', 1, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const employee = new Employee('Foo', 1, 'mugi@magical.com');
    expect(employee.getRole()).toBe('Employee');
});