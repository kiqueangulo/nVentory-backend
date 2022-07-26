'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductDetails', [
      // Dairy
      //Cheese
      {
        name: 'American Cheese Singles',
        brand: 'Kraft',
        quantity: 34,
        price: 4.98
      },
      {
        name: 'Velveeta Original',
        brand: 'Velveeta',
        quantity: 48,
        price: 5.48
      },
      {
        name: 'String Cheese',
        brand: 'Frigo',
        quantity: 66,
        price: 5.98
      },
      {
        name: 'Fiesta Blend Shredded Cheese',
        brand: 'Great Value',
        quantity: 32,
        price: 2.22
      },
      {
        name: 'Parmesan Cheese Grated',
        brand: 'Kraft',
        quantity: 20,
        price: 4.14
      },
      //MILK
      {
        name: 'Whole Milk',
        brand: 'Great Value',
        quantity: 38,
        price: 3.32
      },
      {
        name: '2% Milk',
        brand: 'Great Value',
        quantity: 58,
        price: 3.32
      },
      {
        name: 'Chocolate Milk half gallon',
        brand: 'Great Value',
        quantity: 12,
        price: 1.97
      },
      {
        name: 'Whole Milk',
        brand: 'Umpqua',
        quantity: 3,
        price: 6.12
      },
      {
        name: 'Almond Milk',
        brand: 'Great Value',
        quantity: 12,
        price: 2.36
      },
      //Yogurt
      {
        name: 'Vanilla Greek Yogurt',
        brand: 'Chobani',
        quantity: 58,
        price: 1.06
      },
      {
        name: 'Yoplait Original',
        brand: 'Yoplait',
        quantity: 67,
        price: .52
      },
      {
        name: 'Strawberry Go-Gurt',
        brand: 'Yoplait',
        quantity: 32,
        price: 4.97
      },
      {
        name: 'Vanilla',
        brand: 'Great Value',
        quantity: 11,
        price: 2.36
      },
      {
        name: 'Blueberry Greek',
        brand: 'Ratio',
        quantity: 1.47,
        price: 27
      },
      //Butter
      {
        name: 'Salted Butter',
        brand: 'Land O Lakes',
        quantity: 34,
        price: 5.48
      },
      {
        name: 'Family Size Original Butter',
        brand: 'Country Crock',
        quantity: 14,
        price: 7.23
      },
      {
        name: 'Light Spread',
        brand: 'I Can\'t Believe It\'s Not Butter!',
        quantity: 18,
        price: 3.98
      },
      {
        name: 'Vegetable Oil Sticks',
        brand: 'Blue Bonnet',
        quantity: 19,
        price: 1.63
      },
      {
        name: 'Unsalted Butter',
        brand: 'Land O Lakes',
        quantity: 17,
        price: 5.48
      },
      {
        name: 'Olive Oil & Sea Salt',
        brand: 'Great Value',
        quantity: 29,
        price: 3.98
      },
      //Sour Cream
      {
        name: 'Sour Cream',
        brand: 'Daisy',
        quantity: 28,
        price: 2.38
      },
      {
        name: 'Light Sour Cream',
        brand: 'Daisy',
        quantity: 23,
        price: 2.38
      },
      {
        name: 'Sour Cream',
        brand: 'Great Value',
        quantity: 18,
        price: 1.98
      },
      {
        name: 'Light Sour Cream',
        brand: 'Great Value',
        quantity: 23,
        price: 1.98
      },
      //Creamers
      {
        name: 'Half & Half',
        brand: 'Great Value',
        quantity: 18,
        price: 2.33
      },
      {
        name: 'Half & Half',
        brand: 'Land O Lakes',
        quantity: 1,
        price: 3.23
      },
      {
        name: 'Heavy Whipping Cream',
        brand: 'Great Value',
        quantity: 25,
        price: 2.58
      },
      {
        name: 'Hazelnut Creamer',
        brand: 'Coffee Mate',
        quantity: 18,
        price: 6.48
      },
      {
        name: 'French Vanilla Creamer',
        brand: 'Coffee Mate',
        quantity: 28,
        price: 6.48
      },
      {
        name: 'Caramel Machiato Creamer',
        brand: 'International Delight',
        quantity: 8,
        price: 3.52
      },
      {
        name: 'Natural Bliss Sweet Cream',
        brand: 'Coffee Mate',
        quantity: 2,
        price: 5.48
      },
      {
        name: 'White Chocolate Creamer',
        brand: 'Starbucks',
        quantity: 6,
        price: 5.68
      },
      {
        name: 'Vanilla Almond Creamer',
        brand: 'Silk',
        quantity: 5,
        price: 4.58
      },
      {
        name: 'Extra Extra Creamer',
        brand: 'Dunkin',
        quantity: 13,
        price: 3.58
      },
      // FROZEN
      {
        name: 'Pepperoni Pizza',
        brand: 'Great Value',
        quantity: 24,
        price: 3.88
      },
      {
        name: 'Pepperoni Pizza',
        brand: 'Red Baron',
        quantity: 10,
        price: 4.48
      },
      {
        name: 'Cheese Pizza',
        brand: 'Great Value',
        quantity: 21,
        price: 3.88
      },
      {
        name: 'Cheese Pizza',
        brand: 'Red Baron',
        quantity: 18,
        price: 4.48
      },
      {
        name: 'Rising Crust Pepperoni',
        brand: 'DiGiorno',
        quantity: 32,
        price: 6.92
      },
      {
        name: 'Rising Crust Pepperoni',
        brand: 'Great Value',
        quantity: 18,
        price: 3.98
      },
      {
        name: 'BBQ Chicken Pizza',
        brand: 'California Pizza Kitchen',
        quantity: 12,
        price: 7.48
      },
      //Chicken
      {
        name: 'Chicken Breast Strips',
        brand: 'Tyson',
        quantity: 18,
        price: 9.98
      },
      {
        name: 'Crispy Chicken Strips',
        brand: 'Tyson',
        quantity: 8,
        price: 9.98
      },
      {
        name: 'Pulled Chicken Breast',
        brand: 'Tyson',
        quantity: 9,
        price: 9.98
      },
      {
        name: 'Boneless Skinless Chicken Breasts',
        brand: 'Great Value',
        quantity: 13,
        price: 9.97
      },
      //Breakfast
      {
        name: 'Pancakes & Sausage',
        brand: 'JimmyDean',
        quantity: 33,
        price: 9.64
      },
      {
        name: 'Breakfast Croissant',
        brand: 'JimmyDean',
        quantity: 8,
        price: 10.98
      },
      {
        name: 'Strawberry Toaster Strudel',
        brand: 'Pilsbury',
        quantity: 23,
        price: 2.32
      },
      {
        name: 'Original Waffles',
        brand: 'Eggo',
        quantity: 65,
        price: 5.62
      },
      {
        name: 'Blueberry Waffles',
        brand: 'Eggo',
        quantity: 37,
        price: 5.62
      },
      {
        name: 'Buttermilk Waffles',
        brand: 'Eggos',
        quantity: 2,
        price: 5.62
      },
      {
        name: 'Biscuit & Sausage Gravy',
        brand: 'JimmyDean',
        quantity: 18,
        price: 2.82
      },
      //Ice Cream
      {
        name: 'Moose Tracks',
        brand: 'Great Value',
        quantity: 23,
        price: 2.24
      },
      {
        name: 'Cookie Dough',
        brand: 'Great Value',
        quantity: 18,
        price: 2.24
      },
      {
        name: 'Chocolate',
        brand: 'Blue Bell',
        quantity: 6,
        price: 7.98
      },
      {
        name: 'Vanilla',
        brand: 'Great Value',
        quantity: 23,
        price: 2.24
      },
      {
        name: 'Stawberry',
        brand: 'Blue Bell',
        quantity: 8,
        price: 7.98
      },
      {
        name: 'Neopolitan',
        brand: 'BLue Bunny',
        quantity: 13,
        price: 4.48
      },
      {
        name: 'Twix Ice Cream',
        brand: 'Twix',
        quantity: 18,
        price: 3.88
      },
      {
        name: 'Mint Chocolate Chip',
        brand: 'Breyers',
        quantity: 23,
        price: 3.98
      },
      //Breakfast
      //Coffee
      {
        name: 'Medium Roast Coffee',
        brand: 'Maxwell House',
        quantity: 18,
        price: 9.92
      },
      {
        name: 'Classic Roast Coffee',
        brand: 'Folgers',
        quantity: 24,
        price: 10.24
      },
      {
        name: 'Classic Roast Coffee',
        brand: 'Great Value',
        quantity: 20,
        price: 7.98
      },
      {
        name: 'Original Blend',
        brand: 'Dunkin',
        quantity: 28,
        price: 8.72
      },
      {
        name: 'Expresso Coffee',
        brand: 'Café Bustelo',
        quantity: 33,
        price: 3.76
      },
      {
        name: 'American Classic Coffee',
        brand: 'Community',
        quantity: 12,
        price: 12.94
      },
      //Tea
      {
        name: 'Black Tea',
        brand: 'Lipton',
        quantity: 34,
        price: 3.98
      },
      {
        name: 'Green Tea',
        brand: 'Tazo',
        quantity: 21,
        price: 3.28
      },
      {
        name: 'Chamomile',
        brand: 'Tazo',
        quantity: 33,
        price: 3.28
      },
      {
        name: 'Green Tea',
        brand: 'Bigelow',
        quantity: 18,
        price: 2.98
      },
      {
        name: 'Pepperminte Tea',
        brand: 'Bieglow',
        quantity: 20,
        price: 2.98
      },
      //Cereal
      {
        name: 'Reese\'s Puffs',
        brand: 'General Mills',
        quantity: 18,
        price: 4.78
      },
      {
        name: 'Cap\'n Crunch',
        brand: 'Cap\'n Crunch',
        quantity: 47,
        price: 4.78
      },
      {
        name: 'Cheerios',
        brand: 'General Mills',
        quantity: 12,
        price: 5.98
      },
      {
        name: 'Cinnamon Toast Crunch',
        brand: 'General Mills',
        quantity: 18,
        price: 4.88
      },
      //Bars
      {
        name: 'Brown Sugar Cinnamon Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 18,
        price: 4.14
      },
      {
        name: 'Stawberry Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 23,
        price: 4.14
      },
      {
        name: 'Blueberry Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 12,
        price: 4.14
      },
      {
        name: 'Chocolate Brownie ZBar',
        brand: 'Cliff Kid',
        quantity: 18,
        price: 12.47
      },
      {
        name: 'Almond Bars',
        brand: 'Nature Valley',
        quantity: 65,
        price: 6.62
      },
      {
        name: 'Apple Cinnamon',
        brand: 'Nutri Grain',
        quantity: 59,
        price: 5.16
      },
      {
        name: 'Chocolate Chip',
        brand: 'Chewy',
        quantity: 28,
        price: 8.27
      },
      {
        name: 'Fruit and Grain',
        brand: 'Great Value',
        quantity: 82,
        price: 3.28
      },
      {
        name: 'Iced Oatmeal Cookie Bar',
        brand: 'Cliff Kid',
        quantity: 29,
        price: 12.47
      },
      //Juice
      {
        name: 'Cranberry',
        brand: 'OceanSpray',
        quantity: 19,
        price: 4.98
      },
      {
        name: 'Tangy Original Orange Juice',
        brand: 'SunnyD',
        quantity: 23,
        price: 2.98
      },
      {
        name: 'Fruit Punch',
        brand: 'CapriSun',
        quantity: 10,
        price: 2.98
      },
      {
        name: 'Pulp Free Orange Juice',
        brand: 'Simply Orange',
        quantity: 89,
        price: 6.48
      },
      {
        name: 'Berry Punch',
        brand: 'Minute Maid',
        quantity: 59,
        price: 1.68
      },
      //Snacks
      //Chips
      {
        name: 'Nacho Cheese',
        brand: 'Doritos',
        quantity: 90,
        price: 4.98
      },
      {
        name: 'Cool Ranch',
        brand: 'Doritos',
        quantity: 57,
        price: 4.98
      },
      {
        name: 'Hint of Lime Tortilla',
        brand: 'Tostitos',
        quantity: 39,
        price: 3.98
      },
      {
        name: 'Original Tortilla',
        brand: 'Tostitos',
        quantity: 17,
        price: 4.98
      },
      {
        name: 'Sour Cream & Onion',
        brand: 'Pringles',
        quantity: 90,
        price: 6.34
      },
      {
        name: 'Sour Cream & Onion',
        brand: 'Lays',
        quantity: 78,
        price: 4.78
      },
      {
        name: 'Barbecue',
        brand: 'Lays',
        quantity: 99,
        price: 4.78
      },
      //Crackers
      // {
      //   name: 'Original Crackers',
      //   brand: 'Ritz',
      //   quantity: 18,
      //   price: 5.66
      // },
      // {
      //   name: 'Sour Cream and Onion',
      //   brand: 'Ritz',
      //   quantity: 88,
      //   price: 3.00
      // },
      // {
      //   name: 'Saltine Crackers',
      //   brand: 'Nabasco',
      //   quantity: 32,
      //   price: 3.28
      // },
      // {
      //   name: 'Original Crackers',
      //   brand: 'Town House',
      //   quantity: 78,
      //   price: 3.88
      // },
      // //Soda
      // {
      //   name: 'Pepsi Cola',
      //   brand: 'Pepsi',
      //   quantity: 92,
      //   price: 9.28
      // },
      // {
      //   name: 'Citrus Soda',
      //   brand: 'Mountain Dew',
      //   quantity: 12,
      //   price: 9.28
      // },
      // {
      //   name: 'Coca Cola',
      //   brand: 'Coca Cola',
      //   quantity: 12,
      //   price: 10.88
      // },
      // {
      //   name: 'Sprite',
      //   brand: 'Coca Cola',
      //   quantity: 39,
      //   price: 3.98
      // },
      // {
      //   name: 'Root Beer',
      //   brand: 'A&W',
      //   quantity: 32,
      //   price: 5.48
      // },
      // {
      //   name: 'Sam\'s Cola',
      //   brand: 'Sam\'s',
      //   quantity: 24,
      //   price: 6.24
      // },
      // //Cookies 
      // {
      //   name: 'Original Chocolate Chip',
      //   brand: 'Chips Ahoy',
      //   quantity: 19,
      //   price: 4.28
      // },
      // {
      //   name: 'Chocolate Sandwich Cookies',
      //   brand: 'Oreo',
      //   quantity: 27,
      //   price: 4.28
      // },
      // {
      //   name: 'Nutty Buddy',
      //   brand: 'Little Debbie',
      //   quantity: 12,
      //   price: 2.58
      // },
      // //Gummies
      // {
      //   name: 'Juicy Burst',
      //   brand: 'Black Forest',
      //   quantity: 32,
      //   price: 7.98
      // },
      // {
      //   name: 'Mixed Fruit Snacks',
      //   brand: 'Welch\'s',
      //   quantity: 78,
      //   price: 8.48
      // },
      // {
      //   name: 'Assorted Fruit Snacks',
      //   brand: 'Mott\'s',
      //   quantity: 28,
      //   price: 7.24
      // },
      // {
      //   name: 'Variety Fruit Pack Snacks',
      //   brand: 'Mott\'s',
      //   quantity: 29,
      //   price: 4.97
      // },
      // //Candy
      // {
      //   name: 'Sour Patch Kids',
      //   brand: 'Sour Patch Kids',
      //   quantity: 38,
      //   price: 1.24
      // },
      // {
      //   name: 'Gummy Clusters',
      //   brand: 'Nerds',
      //   quantity: 89,
      //   price: 3.48
      // },
      // {
      //   name: 'Skittles',
      //   brand: 'Skittles',
      //   quantity: 134,
      //   price: 1.98
      // },
      // {
      //   name: 'Airheads Mini Bars',
      //   brand: 'Airheads',
      //   quantity: 100,
      //   price: 2.28
      // },
      // {
      //   name: 'Reese\'s',
      //   brand: 'Reese\'s',
      //   quantity: 189,
      //   price: 1.48
      // },
      // //Spreads
      // {
      //   name: 'Peanut Butter',
      //   brand: 'Jif',
      //   quantity: 40,
      //   price: 6.78
      // },
      // {
      //   name: 'Crunch Peanut Butter',
      //   brand: 'Jif',
      //   quantity: 88,
      //   price: 6.78
      // },
      // {
      //   name: 'Nutella',
      //   brand: 'Nutella',
      //   quantity: 49,
      //   price: 8.48
      // },
      // {
      //   name: 'Creamy Stripes',
      //   brand: 'Great Value',
      //   quantity: 25,
      //   price: 2.24
      // },
      // {
      //   name: 'Peanut Butter',
      //   brand: 'Great Value',
      //   quantity: 78,
      //   price: 3.47
      // },
      // {
      //   name: 'Grape Jelly',
      //   brand: 'Welch\'s',
      //   quantity: 29,
      //   price: 2.74
      // },
      // {
      //   name: 'Stawberry Jelly',
      //   brand: 'Welch\'s',
      //   quantity: 45,
      //   price: 2.74
      // },
      // //Produce
      // //Blue,straw,blackberries
      // {
      //   name: 'Strawberries',
      //   brand: 'Great Value',
      //   quantity: 12,
      //   price: 2.32
      // },
      // {
      //   name: 'Blueberries',
      //   brand: 'Dole',
      //   quantity: 33,
      //   price: 3.33
      // },
      // {
      //   name: 'Blackberries',
      //   brand: 'Great Value',
      //   quantity: 28,
      //   price: 3.58
      // },
      // //Lemon/lime/apples/cherries/Bananas/Oranges
      // {
      //   name: 'Lemons',
      //   brand: 'Great Value',
      //   quantity: 87,
      //   price: .58
      // },
      // {
      //   name: 'Limes',
      //   brand: 'Susie',
      //   quantity: 89,
      //   price: .65
      // },
      // {
      //   name: 'Limes',
      //   brand: 'Great Value',
      //   quantity: 49,
      //   price: .54
      // },
      // {
      //   name: 'Granny Smith Apples',
      //   brand: 'Great Value',
      //   quantity: 35,
      //   price: .88
      // },
      // {
      //   name: 'Gala Apples',
      //   brand: 'Great Value',
      //   quantity: 76,
      //   price: .87
      // },
      // {
      //   name: 'Fuji Apples',
      //   brand: 'Great Value',
      //   quantity: 99,
      //   price: .78
      // },
      // {
      //   name: 'Red Cherries',
      //   brand: 'Great Value',
      //   quantity: 11,
      //   price: 11.18
      // },
      // {
      //   name: 'Rainier Cherries',
      //   brand: 'Dole',
      //   quantity: 23,
      //   price: 10.46
      // },
      // {
      //   name: 'Bananas',
      //   brand: 'Great Value',
      //   quantity: 28,
      //   price: .23
      // },
      // {
      //   name: 'Organic Bananas',
      //   brand: 'Great Value',
      //   quantity: 34,
      //   price: .69
      // },
      // {
      //   name: 'Organic Oranges',
      //   brand: 'Marketside',
      //   quantity: 88,
      //   price: 6.88
      // },
      // {
      //   name: 'Oranges',
      //   brand: 'Great Value',
      //   quantity: 38,
      //   price: 4.98
      // },
      // //Zucchini/Squash/Onion/Peppers
      // {
      //   name: 'Zucchini',
      //   brand: 'Great Value',
      //   quantity: 39,
      //   price: .98
      // },
      // {
      //   name: 'Squash',
      //   brand: 'Great Value',
      //   quantity: 23,
      //   price: .89
      // },
      // {
      //   name: 'Yellow Onion',
      //   brand: 'Great Value',
      //   quantity: 54,
      //   price: .45
      // },
      // {
      //   name: 'Red oNion',
      //   brand: 'Great Value',
      //   quantity: 43,
      //   price: .45
      // },
      // {
      //   name: 'Red Peppers',
      //   brand: 'Great Value',
      //   quantity: 23,
      //   price: 1.48
      // },
      // {
      //   name: '3-Pack Assorted Peppers',
      //   brand: 'Great Value',
      //   quantity: 12,
      //   price: 3.58
      // },
      // //Tomatoes/Asparagus/Broccoli/Lettuce
      // {
      //   name: 'Roma Tomatoes',
      //   brand: 'Great Value',
      //   quantity: 23,
      //   price: .26
      // },
      // {
      //   name: 'Grape Tomatoes',
      //   brand: 'Great Value',
      //   quantity: 38,
      //   price: 1.48
      // },
      // {
      //   name: 'Asparagus',
      //   brand: 'Marketside',
      //   quantity: 3,
      //   price: 4.18
      // },
      // {
      //   name: 'Broccoli',
      //   brand: 'Great Value',
      //   quantity: 33,
      //   price: 1.31
      // },
      // {
      //   name: 'Broccoli',
      //   brand: 'Marketside',
      //   quantity: 23,
      //   price: 2.78
      // },
      // {
      //   name: 'Iceburg Lettuce',
      //   brand: 'Green Giant',
      //   quantity: 19,
      //   price: 1.48
      // },
      // {
      //   name: 'Shredded Iceburg Lettuce',
      //   brand: 'Marketside',
      //   quantity: 12,
      //   price: 1.98
      // },
      // {
      //   name: 'Romaine Lettuce',
      //   brand: 'Great Value',
      //   quantity: 21,
      //   price: 2.62
      // },
      // //Celery/Carrots/Corn/Green Onions
      // {
      //   name: 'Celery',
      //   brand: 'Dole',
      //   quantity: 12,
      //   price: 1.47
      // },
      // {
      //   name: 'Carrots',
      //   brand: 'Bolthouse',
      //   quantity: 19,
      //   price: 1.92
      // },
      // {
      //   name: 'Corn',
      //   brand: 'Great Value',
      //   quantity: 22,
      //   price: .50
      // },
      // {
      //   name: 'Green Onions',
      //   brand: 'Great Value',
      //   quantity: 83,
      //   price: .48
      // },
      // //Cooking
      // //Sauces
      // {
      //   name: 'Ketchup',
      //   brand: 'Heinz',
      //   quantity: 190,
      //   price: 1.48
      // },
      // {
      //   name: 'Mustard',
      //   brand: 'Heinze',
      //   quantity: 159,
      //   price: 1.76
      // },
      // {
      //   name: 'Ranch',
      //   brand: 'Hidden Valley',
      //   quantity: 83,
      //   price: 2.39
      // },
      // {
      //   name: 'Mayonaise',
      //   brand: 'Duke\'s',
      //   quantity: 89,
      //   price: 1.98
      // },
      // {
      //   name: 'BBQ Sauce',
      //   brand: 'Sweet Baby Ray\'s',
      //   quantity: 123,
      //   price: 1.97
      // },
      // {
      //   name: 'Steak Sauce',
      //   brand: 'A1',
      //   quantity: 198,
      //   price: 1.78
      // },
      // //Sugars
      // {
      //   name: 'Granulated Sugar',
      //   brand: 'Great Value',
      //   quantity: 12,
      //   price: 2.57
      // },
      // {
      //   name: 'Cane Sugar',
      //   brand: 'C & H',
      //   quantity: 32,
      //   price: 3.25
      // },
      // {
      //   name: 'Pure Cane Sugar',
      //   brand: 'Morena',
      //   quantity: 43,
      //   price: 3.18
      // },
      // {
      //   name: 'Granulated Sugar',
      //   brand: 'Domino',
      //   quantity: 54,
      //   price: 3.34
      // },
      // //Spices
      // {
      //   name: 'Garlic Parmesan',
      //   brand: 'Weber',
      //   quantity: 44,
      //   price: 4.42
      // },
      // {
      //   name: 'Seasoned Salt',
      //   brand: 'Lawrys',
      //   quantity: 78,
      //   price: 3.68
      // },
      // {
      //   name: 'Ground Cinnamon',
      //   brand: 'Great Value',
      //   quantity: 82,
      //   price: 1.18
      // },
      // {
      //   name: 'Garlic Powder',
      //   brand: 'McCormick',
      //   quantity: 87,
      //   price: 6.50
      // },
      // {
      //   name: 'Paprika',
      //   brand: 'Great Value',
      //   quantity: 100,
      //   price: 1.00
      // },
      // {
      //   name: 'Ground Cumin',
      //   brand: 'Great Value',
      //   quantity: 29,
      //   price: 1.28
      // },
      // //Flour
      // {
      //   name: 'All-Purpose Flour',
      //   brand: 'Great Value',
      //   quantity: 12,
      //   price: 2.12
      // },
      // {
      //   name: 'Cake Flour',
      //   brand: 'Swans Down',
      //   quantity: 45,
      //   price: 3.52
      // },
      // {
      //   name: 'All-Purpose flour',
      //   brand: 'Gold Medal',
      //   quantity: 45,
      //   price: 3.64
      // },
      // //Alcohol
      // //Red Wine
      // {
      //   name: 'Red Wine Blend',
      //   brand: 'Apothic',
      //   quantity: 10,
      //   price: 11.73
      // },
      // {
      //   name: 'Cabernet Sauvignon',
      //   brand: 'Robert Mondavi',
      //   quantity: 12,
      //   price: 8.48
      // },
      // {
      //   name: 'Sweet Red Blend',
      //   brand: 'Duplin',
      //   quantity: 3,
      //   price: 7.48
      // },
      // {
      //   name: 'Merlot',
      //   brand: 'Oak Leaf',
      //   quantity: 23,
      //   price: 2.96
      // },
      // //White Wine
      // {
      //   name: 'Pinot Grigio',
      //   brand: 'Oak Leaf',
      //   quantity: 24,
      //   price: 2.96
      // },
      // {
      //   name: 'Pinot Grigio',
      //   brand: 'Barefoot',
      //   quantity: 12,
      //   price: 11.48
      // },
      // {
      //   name: 'Chardonnay',
      //   brand: 'J. Lohr',
      //   quantity: 27,
      //   price: 13.48
      // },
      // {
      //   name: 'Sauvignon Blanc',
      //   brand: 'Cupcake',
      //   quantity: 1,
      //   price: 7.98
      // },
      // //Domestic Beer
      // {
      //   name: 'Light Beer',
      //   brand: 'Michelob ULTRA',
      //   quantity: 20,
      //   price: 20.48
      // },
      // {
      //   name: 'Light Beer',
      //   brand: 'Bud Light',
      //   quantity: 23,
      //   price: 18.48
      // },
      // {
      //   name: 'Light Beer',
      //   brand: 'Miller Lite',
      //   quantity: 24,
      //   price: 18.48
      // },
      // //Craft Beer
      // {
      //   name: 'IPA Craft Beer',
      //   brand: 'Elysian',
      //   quantity: 12,
      //   price: 12.48
      // },
      // {
      //   name: '420 Extra Pale Ale',
      //   brand: 'Sweetwater',
      //   quantity: 24,
      //   price: 17.48
      // },
      // {
      //   name: 'Summer Shandy',
      //   brand: 'Leinenkugel',
      //   quantity: 11,
      //   price: 9.48
      // },
      // {
      //   name: 'IPA Craft Beer',
      //   brand: 'Goose Island',
      //   quantity: 14,
      //   price: 16.98
      // },
      // //Frozen Drinks
      // {
      //   name: 'Escapes Variety Pack',
      //   brand: 'Seagrams',
      //   quantity: 18,
      //   price: 14.48
      // },
      // {
      //   name: 'Italian Ice',
      //   brand: 'Seagrams',
      //   quantity: 12,
      //   price: 14.48
      // },
      // {
      //   name: 'Strawberry Margarita',
      //   brand: 'Daily\'s',
      //   quantity: 22,
      //   price: 1.88
      // },
      // {
      //   name: 'Bahama Mama',
      //   brand: 'Daily\'s',
      //   quantity: 19,
      //   price: 1.88
      // },
      // {
      //   name: 'Hurricane',
      //   brand: 'Daily\'s',
      //   quantity: 7,
      //   price: 1.88
      // },
  ])
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('ProductDetails', null, {})
  }
};
