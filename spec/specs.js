describe('Pizza', function() {
  describe('pizza.diameter', function() {
    it('displays the diameter of a pizza', function() {
      var testPizza = Object.create(pizza);
      testPizza.diameter = 10;
      testPizza.ingredients='test1';
      expect(testPizza.diameter).to.equal(10);
    });
  });
  describe('pizza.ingredients', function() {
    it('displays the ingredients of a pizza', function() {
      var testPizza = Object.create(pizza);
      testPizza.diameter = 10;
      testPizza.ingredients='test2';
      expect(testPizza.ingredients).to.equal('test2');
    });
  });
  describe('pizza.slices', function() {
    it('displays the number of slices', function() {
      var testPizza = Object.create(pizza);
      testPizza.diameter = 24;
      testPizza.ingredients='test3';
      expect(testPizza.slices()).to.equal(96);
    });
  });

});
