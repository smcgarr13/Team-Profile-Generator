const Engineer = require('./Engineer')

describe('Engineer class', () => {
    it('throws an error if github is not provided', () => {
        expect(() => new Engineer('Mugi', 813, 'mugi@magical.com')).toThrowError('Engineer github cannot be an empty string');
        expect(() => new Engineer('Mugi', 813, 'mugi@magical.com', '')).toThrowError('Engineer github cannot be an empty string');
    });

    it('creates an Engineer object with provided parameters', () => {
        const engineer = new Engineer('Mugi', 813, 'mugi@magical.com', 'smcgarr13');
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toBe('Mugi');
        expect(engineer.id).toBe(813);
        expect(engineer.email).toBe('mugi@magical.com');
        expect(engineer.github).toBe('smcgarr13');
    });

    it('inherits properties and methods from the employee class', () => {
        const engineer = new Engineer('Mugi', 813, 'mugi@magical.com', 'smcgarr13');
        expect(engineer.getName()).toBe('Mugi');
        expect(engineer.getId()).toBe(813);
        expect(engineer.getEmail()).toBe('mugi@magical.com');
        expect(engineer.getRole()).toBe('Engineer');
    });

});