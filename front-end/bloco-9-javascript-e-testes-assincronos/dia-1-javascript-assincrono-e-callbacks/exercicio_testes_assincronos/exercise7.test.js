const uppercase = require('./exercise7');

describe('Testes da função Uppercase', () => {
  it('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
      try {
    expect((str)).toBe('TEST');
    done();
      }catch(error) {
        done(error);
      }
    });
  });
});