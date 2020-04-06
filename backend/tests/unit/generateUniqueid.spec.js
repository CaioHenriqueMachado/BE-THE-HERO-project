const generateUniqueid = require ('../../src/utils/generateUniqueid');

describe('Generete Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueid();

        expect(id).toHaveLength(8);
    });
});

// Para executar o teste (npm test)