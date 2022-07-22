'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_details', [
    {
      name: 'Milk',
      brand: 'Kroger',
      quantity: 20,
      price: 2.99
    },
    {
      name: 'Chicken',
      brand: 'Tyson',
      quantity: 7,
      price: 8.99
    },
    {
      name: 'Ketchup',
      brand: 'Heinz',
      quantity: 58,
      price: 1.99
    },
    {
      name: 'Apples',
      brand: 'Fuji',
      quantity: 20,
      price: 2.99
    },
    {
      name: 'Orange Juice',
      brand: 'Tropicana',
      quantity: 10,
      price: 3.77
    },
    {
      name: 'Eggs',
      brand: 'Egglands',
      quantity: 18,
      price: 3.34
    },
    {
      name: 'Bacon',
      brand: 'Oscar Meyer',
      quantity: 34,
      price: 6.01
    },
    {
      name: 'Bread',
      brand: 'Wonder',
      quantity: 40,
      price: 2.99
    },
    {
      name: 'Ground Beef',
      brand: 'Kroger',
      quantity: 33,
      price: 6.14
    },
    {
      name: 'Rib-Eye',
      brand: 'Tyson',
      quantity: 11,
      price: 14.83
    },
    {
      name: 'Butter',
      brand: 'Lad O Lakes',
      quantity: 56,
      price: 2.99
    },
    {
      name: 'Bananas',
      brand: 'Dole',
      quantity: 130,
      price: .59
    },
    {
      name: 'Tomatoes',
      brand: 'Cento',
      quantity: 49,
      price: 1.83
    },
    {
      name: 'Coffee',
      brand: 'Petes',
      quantity: 84,
      price: 7.99
    },
    {
      name: 'Cabernet Sauvignon',
      brand: 'Josh',
      quantity: 18,
      price: 19.99
    },
    {
      name: 'Beer',
      brand: 'Bud-Light',
      quantity: 34,
      price: 17.99
    },
    {
      name: 'Soda',
      brand: 'Coke',
      quantity: 29,
      price: 4.79
    },
    {
      name: 'Chips',
      brand: 'Doritos',
      quantity: 79,
      price: 3.45
    },
    {
      name: 'Strawberry',
      brand: 'Driscoll',
      quantity: 76,
      price: 3.39
    },
    {
      name: 'Yogurt',
      brand: 'Yoplait',
      quantity: 28,
      price: .99
    }
  ])
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('product_details', null, {})
  }
};
