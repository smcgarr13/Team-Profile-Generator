const Manager = require('./Manager')

describe('Manager class', () => {
    it('throws an error if officeNumber is not provided or not a string', () => {
        expect(() => new Manager('Mugi', 813, 'mugi@magical.com')).toThrowError('Manager office number cannot be an empty string');
        expect(() => new Manager('Mugi', 813, 'mugi@magical.com', 8)).toThrowError('Manager office number cannot be an empty string');
    });

    it('creates a Manager object with provided parameters', () => {
        const manager = new Manager('Mugi', 813, 'mugi@magical.com', '8');
        expect(manager).toBeInstanceOf(Manager);
        expect(manager.name).toBe('Mugi');
        expect(manager.id).toBe(813);
        expect(manager.email).toBe('mugi@magical.com');
        expect(manger.officeNumber).toBe('8');
    });

    it('inherits properties and methods from the employee class', () => {
        const manager = new Manager('Mugi', 813, 'mugi@magical.com', '8');
        expect(manager.getName()).toBe('Mugi');
        expect(manager.getId()).toBe(813);
        expect(manager.getEmail()).toBe('mugi@magical.com');
        expect(manger.getRole()).toBe('Manager');
    });

});