var pizza = {diameter: 0, ingredient: 'none',
  slices: function(diameter) {
    var randomizer = Math.floor(Math.random()* (10 - 1)+1);
    if (this.ingredient === 'cheese') {
      return (this.diameter*randomizer / 2);
    } else {
      return (this.diameter*randomizer *6);
    }

  }
};

$(document).ready(function(event) {
  $('form#pizza-order').submit(function(event) {
    var inputted_pizzaSize = parseFloat($('input[name=size]:checked', '#pizza-order').val());
    var inputted_pizzaIngredient = $('input[name=ingredient]:checked', '#pizza-order').val();
    var new_pizza = Object.create(pizza);
    new_pizza.diameter = inputted_pizzaSize;
    new_pizza.ingredient = inputted_pizzaIngredient;

    $('#pizza-size').text(new_pizza.diameter);
    $('#pizza-ingredient').text(new_pizza.ingredient);
    $('#pizza-slices').text(new_pizza.slices());

    $('#result').show();
    event.preventDefault();

  });
});
