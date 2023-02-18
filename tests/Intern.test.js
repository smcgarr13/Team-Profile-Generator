const Intern = require('../lib/Intern.js')

describe('Intern class', () => {
    it('throws an error if school is not provided', () => {
        expect(() => new Intern('Mugi', 813, 'mugi@magical.com')).toThrowError('Intern school cannot be an empty string');
        expect(() => new Intern('Mugi', 813, 'mugi@magical.com', '')).toThrowError('Intern school cannot be an empty string');
    });

    it('creates an Intern object with provided parameters', () => {
        const intern = new Intern('Mugi', 813, 'mugi@magical.com', 'school name');
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.name).toBe('Mugi');
        expect(intern.id).toBe(813);
        expect(intern.email).toBe('mugi@magical.com');
        expect(intern.school).toBe('school name');
    });

    it('inherits properties and methods from the employee class', () => {
        const intern = new Intern('Mugi', 813, 'mugi@magical.com', 'school name');
        expect(intern.getName()).toBe('Mugi');
        expect(intern.getId()).toBe(813);
        expect(intern.getEmail()).toBe('mugi@magical.com');
        expect(intern.getRole()).toBe('Intern');
    });

});