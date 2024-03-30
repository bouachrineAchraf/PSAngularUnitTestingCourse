describe('my first test', () => {
    let sut;

    beforeEach(() => {
        sut = {};
    })

    it('should be true if true', () => {
        // arrange
        sut.ad = false;
        // act
        sut.a = true
        // assert 
        expect(sut.a).toBe(true)
    })
})