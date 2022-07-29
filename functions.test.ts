const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return equal length array', () => {
        expect(shuffleArray([1, 2, 3])).toHaveLength(3)
    }); 
    test('shuffle the array', () => {
        expect(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
})