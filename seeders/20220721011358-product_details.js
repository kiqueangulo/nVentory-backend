'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('productdetails', [
      // Dairy
      //Cheese
      {
        location_id: 1,
        name: 'American Cheese Singles',
        brand: 'Kraft',
        quantity: 34,
        price: 4.98
      },
      {
        location_id: 2,
        name: 'Velveeta Original',
        brand: 'Velveeta',
        quantity: 48,
        price: 5.48
      },
      {
        location_id: 3,
        name: 'String Cheese',
        brand: 'Frigo',
        quantity: 66,
        price: 5.98
      },
      {
        location_id: 4,
        name: 'Fiesta Blend Shredded Cheese',
        brand: 'Great Value',
        quantity: 32,
        price: 2.22
      },
      {
        location_id: 5,
        name: 'Parmesan Cheese Grated',
        brand: 'Kraft',
        quantity: 20,
        price: 4.14
      },
      //MILK
      {
        location_id: 6,
        name: 'Whole Milk',
        brand: 'Great Value',
        quantity: 38,
        price: 3.32
      },
      {
        location_id: 7,
        name: '2% Milk',
        brand: 'Great Value',
        quantity: 58,
        price: 3.32
      },
      {
        location_id: 8,
        name: 'Chocolate Milk half gallon',
        brand: 'Great Value',
        quantity: 12,
        price: 1.97
      },
      {
        location_id: 9,
        name: 'Whole Milk',
        brand: 'Umpqua',
        quantity: 3,
        price: 6.12
      },
      {
        location_id: 10,
        name: 'Almond Milk',
        brand: 'Great Value',
        quantity: 12,
        price: 2.36
      },
      //Yogurt
      {
        location_id: 11,
        name: 'Vanilla Greek Yogurt',
        brand: 'Chobani',
        quantity: 58,
        price: 1.06
      },
      {
        location_id: 12,
        name: 'Yoplait Original',
        brand: 'Yoplait',
        quantity: 67,
        price: .52
      },
      {
        location_id: 13,
        name: 'Strawberry Go-Gurt',
        brand: 'Yoplait',
        quantity: 32,
        price: 4.97
      },
      {
        location_id: 14,
        name: 'Vanilla',
        brand: 'Great Value',
        quantity: 11,
        price: 2.36
      },
      {
        location_id: 15,
        name: 'Blueberry Greek',
        brand: 'Ratio',
        quantity: 1.47,
        price: 27
      },
      //Butter
      {
        location_id: 16,
        name: 'Salted Butter',
        brand: 'Land O Lakes',
        quantity: 34,
        price: 5.48
      },
      {
        location_id: 17,
        name: 'Family Size Original Butter',
        brand: 'Country Crock',
        quantity: 14,
        price: 7.23
      },
      {
        location_id: 18,
        name: 'Light Spread',
        brand: 'I Can\'t Believe It\'s Not Butter!',
        quantity: 18,
        price: 3.98
      },
      {
        location_id: 19,
        name: 'Vegetable Oil Sticks',
        brand: 'Blue Bonnet',
        quantity: 19,
        price: 1.63
      },
      {
        location_id: 20,
        name: 'Unsalted Butter',
        brand: 'Land O Lakes',
        quantity: 17,
        price: 5.48
      },
      {
        location_id: 21,
        name: 'Olive Oil & Sea Salt',
        brand: 'Great Value',
        quantity: 29,
        price: 3.98
      },
      //Sour Cream
      {
        location_id: 22,
        name: 'Sour Cream',
        brand: 'Daisy',
        quantity: 28,
        price: 2.38
      },
      {
        location_id: 23,
        name: 'Light Sour Cream',
        brand: 'Daisy',
        quantity: 23,
        price: 2.38
      },
      {
        location_id: 24,
        name: 'Sour Cream',
        brand: 'Great Value',
        quantity: 18,
        price: 1.98
      },
      {
        location_id: 25,
        name: 'Light Sour Cream',
        brand: 'Great Value',
        quantity: 23,
        price: 1.98
      },
      //Creamers
      {
        location_id: 26,
        name: 'Half & Half',
        brand: 'Great Value',
        quantity: 18,
        price: 2.33
      },
      {
        location_id: 27,
        name: 'Half & Half',
        brand: 'Land O Lakes',
        quantity: 1,
        price: 3.23
      },
      {
        location_id: 28,
        name: 'Heavy Whipping Cream',
        brand: 'Great Value',
        quantity: 25,
        price: 2.58
      },
      {
        location_id: 29,
        name: 'Hazelnut Creamer',
        brand: 'Coffee Mate',
        quantity: 18,
        price: 6.48
      },
      {
        location_id: 30,
        name: 'French Vanilla Creamer',
        brand: 'Coffee Mate',
        quantity: 28,
        price: 6.48
      },
      {
        location_id: 31,
        name: 'Caramel Machiato Creamer',
        brand: 'International Delight',
        quantity: 8,
        price: 3.52
      },
      {
        location_id: 32,
        name: 'Natural Bliss Sweet Cream',
        brand: 'Coffee Mate',
        quantity: 2,
        price: 5.48
      },
      {
        location_id: 33,
        name: 'White Chocolate Creamer',
        brand: 'Starbucks',
        quantity: 6,
        price: 5.68
      },
      {
        location_id: 34,
        name: 'Vanilla Almond Creamer',
        brand: 'Silk',
        quantity: 5,
        price: 4.58
      },
      {
        location_id: 35,
        name: 'Extra Extra Creamer',
        brand: 'Dunkin',
        quantity: 13,
        price: 3.58
      },
      // FROZEN
      {
        location_id: 36,
        name: 'Pepperoni Pizza',
        brand: 'Great Value',
        quantity: 24,
        price: 3.88
      },
      {
        location_id: 37,
        name: 'Pepperoni Pizza',
        brand: 'Red Baron',
        quantity: 10,
        price: 4.48
      },
      {
        location_id: 38,
        name: 'Cheese Pizza',
        brand: 'Great Value',
        quantity: 21,
        price: 3.88
      },
      {
        location_id: 39,
        name: 'Cheese Pizza',
        brand: 'Red Baron',
        quantity: 18,
        price: 4.48
      },
      {
        location_id: 40,
        name: 'Rising Crust Pepperoni',
        brand: 'DiGiorno',
        quantity: 32,
        price: 6.92
      },
      {
        location_id: 41,
        name: 'Rising Crust Pepperoni',
        brand: 'Great Value',
        quantity: 18,
        price: 3.98
      },
      {
        location_id: 42,
        name: 'BBQ Chicken Pizza',
        brand: 'California Pizza Kitchen',
        quantity: 12,
        price: 7.48
      },
      //Chicken
      {
        location_id: 43,
        name: 'Chicken Breast Strips',
        brand: 'Tyson',
        quantity: 18,
        price: 9.98
      },
      {
        location_id: 44,
        name: 'Crispy Chicken Strips',
        brand: 'Tyson',
        quantity: 8,
        price: 9.98
      },
      {
        location_id: 45,
        name: 'Pulled Chicken Breast',
        brand: 'Tyson',
        quantity: 9,
        price: 9.98
      },
      {
        location_id: 46,
        name: 'Boneless Skinless Chicken Breasts',
        brand: 'Great Value',
        quantity: 13,
        price: 9.97
      },
      //Breakfast
      {
        location_id: 47,
        name: 'Pancakes & Sausage',
        brand: 'JimmyDean',
        quantity: 33,
        price: 9.64
      },
      {
        location_id: 48,
        name: 'Breakfast Croissant',
        brand: 'JimmyDean',
        quantity: 8,
        price: 10.98
      },
      {
        location_id: 49,
        name: 'Strawberry Toaster Strudel',
        brand: 'Pilsbury',
        quantity: 23,
        price: 2.32
      },
      {
        location_id: 50,
        name: 'Original Waffles',
        brand: 'Eggo',
        quantity: 65,
        price: 5.62
      },
      {
        location_id: 51,
        name: 'Blueberry Waffles',
        brand: 'Eggo',
        quantity: 37,
        price: 5.62
      },
      {
        location_id: 52,
        name: 'Buttermilk Waffles',
        brand: 'Eggos',
        quantity: 2,
        price: 5.62
      },
      {
        location_id: 53,
        name: 'Biscuit & Sausage Gravy',
        brand: 'JimmyDean',
        quantity: 18,
        price: 2.82
      },
      //Ice Cream
      {
        location_id: 54,
        name: 'Moose Tracks',
        brand: 'Great Value',
        quantity: 23,
        price: 2.24
      },
      {
        location_id: 55,
        name: 'Cookie Dough',
        brand: 'Great Value',
        quantity: 18,
        price: 2.24
      },
      {
        location_id: 56,
        name: 'Chocolate',
        brand: 'Blue Bell',
        quantity: 6,
        price: 7.98
      },
      {
        location_id: 57,
        name: 'Vanilla',
        brand: 'Great Value',
        quantity: 23,
        price: 2.24
      },
      {
        location_id: 58,
        name: 'Stawberry',
        brand: 'Blue Bell',
        quantity: 8,
        price: 7.98
      },
      {
        location_id: 59,
        name: 'Neopolitan',
        brand: 'BLue Bunny',
        quantity: 13,
        price: 4.48
      },
      {
        location_id: 60,
        name: 'Twix Ice Cream',
        brand: 'Twix',
        quantity: 18,
        price: 3.88
      },
      {
        location_id: 61,
        name: 'Mint Chocolate Chip',
        brand: 'Breyers',
        quantity: 23,
        price: 3.98
      },
      //Breakfast
      //Coffee
      {
        location_id: 62,
        name: 'Medium Roast Coffee',
        brand: 'Maxwell House',
        quantity: 18,
        price: 9.92
      },
      {
        location_id: 63,
        name: 'Classic Roast Coffee',
        brand: 'Folgers',
        quantity: 24,
        price: 10.24
      },
      {
        location_id: 64,
        name: 'Classic Roast Coffee',
        brand: 'Great Value',
        quantity: 20,
        price: 7.98
      },
      {
        location_id: 65,
        name: 'Original Blend',
        brand: 'Dunkin',
        quantity: 28,
        price: 8.72
      },
      {
        location_id: 66,
        name: 'Expresso Coffee',
        brand: 'Caf?? Bustelo',
        quantity: 33,
        price: 3.76
      },
      {
        location_id: 67,
        name: 'American Classic Coffee',
        brand: 'Community',
        quantity: 12,
        price: 12.94
      },
      //Tea
      {
        location_id: 68,
        name: 'Black Tea',
        brand: 'Lipton',
        quantity: 34,
        price: 3.98
      },
      {
        location_id: 69,
        name: 'Green Tea',
        brand: 'Tazo',
        quantity: 21,
        price: 3.28
      },
      {
        location_id: 70,
        name: 'Chamomile',
        brand: 'Tazo',
        quantity: 33,
        price: 3.28
      },
      {
        location_id: 71,
        name: 'Green Tea',
        brand: 'Bigelow',
        quantity: 18,
        price: 2.98
      },
      {
        location_id: 72,
        name: 'Pepperminte Tea',
        brand: 'Bieglow',
        quantity: 20,
        price: 2.98
      },
      //Cereal
      {
        location_id: 73,
        name: 'Reese\'s Puffs',
        brand: 'General Mills',
        quantity: 18,
        price: 4.78
      },
      {
        location_id: 74,
        name: 'Cap\'n Crunch',
        brand: 'Cap\'n Crunch',
        quantity: 47,
        price: 4.78
      },
      {
        location_id: 75,
        name: 'Cheerios',
        brand: 'General Mills',
        quantity: 12,
        price: 5.98
      },
      {
        location_id: 76,
        name: 'Cinnamon Toast Crunch',
        brand: 'General Mills',
        quantity: 18,
        price: 4.88
      },
      //Bars
      {
        location_id: 77,
        name: 'Brown Sugar Cinnamon Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 18,
        price: 4.14
      },
      {
        location_id: 78,
        name: 'Stawberry Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 23,
        price: 4.14
      },
      {
        location_id: 79,
        name: 'Blueberry Pop-Tarts',
        brand: 'Pop-Tarts',
        quantity: 12,
        price: 4.14
      },
      {
        location_id: 80,
        name: 'Chocolate Brownie ZBar',
        brand: 'Cliff Kid',
        quantity: 18,
        price: 12.47
      },
      {
        location_id: 81,
        name: 'Almond Bars',
        brand: 'Nature Valley',
        quantity: 65,
        price: 6.62
      },
      {
        location_id: 82,
        name: 'Apple Cinnamon',
        brand: 'Nutri Grain',
        quantity: 59,
        price: 5.16
      },
      {
        location_id: 83,
        name: 'Chocolate Chip',
        brand: 'Chewy',
        quantity: 28,
        price: 8.27
      },
      {
        location_id: 84,
        name: 'Fruit and Grain',
        brand: 'Great Value',
        quantity: 82,
        price: 3.28
      },
      {
        location_id: 85,
        name: 'Iced Oatmeal Cookie Bar',
        brand: 'Cliff Kid',
        quantity: 29,
        price: 12.47
      },
      //Juice
      {
        location_id: 86,
        name: 'Cranberry',
        brand: 'OceanSpray',
        quantity: 19,
        price: 4.98
      },
      {
        location_id: 87,
        name: 'Tangy Original Orange Juice',
        brand: 'SunnyD',
        quantity: 23,
        price: 2.98
      },
      {
        location_id: 88,
        name: 'Fruit Punch',
        brand: 'CapriSun',
        quantity: 10,
        price: 2.98
      },
      {
        location_id: 89,
        name: 'Pulp Free Orange Juice',
        brand: 'Simply Orange',
        quantity: 89,
        price: 6.48
      },
      {
        location_id: 90,
        name: 'Berry Punch',
        brand: 'Minute Maid',
        quantity: 59,
        price: 1.68
      },
      //Snacks
      //Chips
      {
        location_id: 91,
        name: 'Nacho Cheese',
        brand: 'Doritos',
        quantity: 90,
        price: 4.98
      },
      {
        location_id: 92,
        name: 'Cool Ranch',
        brand: 'Doritos',
        quantity: 57,
        price: 4.98
      },
      {
        location_id: 93,
        name: 'Hint of Lime Tortilla',
        brand: 'Tostitos',
        quantity: 39,
        price: 3.98
      },
      {
        location_id: 94,
        name: 'Original Tortilla',
        brand: 'Tostitos',
        quantity: 17,
        price: 4.98
      },
      {
        location_id: 95,
        name: 'Sour Cream & Onion',
        brand: 'Pringles',
        quantity: 90,
        price: 6.34
      },
      {
        location_id: 96,
        name: 'Sour Cream & Onion',
        brand: 'Lays',
        quantity: 78,
        price: 4.78
      },
      {
        location_id: 97,
        name: 'Barbecue',
        brand: 'Lays',
        quantity: 99,
        price: 4.78
      },
      //Crackers
      {
        location_id: 98,
        name: 'Original Crackers',
        brand: 'Ritz',
        quantity: 18,
        price: 5.66
      },
      {
        location_id: 99,
        name: 'Sour Cream and Onion',
        brand: 'Ritz',
        quantity: 88,
        price: 3.00
      },
      {
        location_id: 100,
        name: 'Saltine Crackers',
        brand: 'Nabasco',
        quantity: 32,
        price: 3.28
      },
      {
        location_id: 101,
        name: 'Original Crackers',
        brand: 'Town House',
        quantity: 78,
        price: 3.88
      },
      //Soda
      {
        location_id: 102,
        name: 'Pepsi Cola',
        brand: 'Pepsi',
        quantity: 92,
        price: 9.28
      },
      {
        location_id: 103,
        name: 'Citrus Soda',
        brand: 'Mountain Dew',
        quantity: 12,
        price: 9.28
      },
      {
        location_id: 104,
        name: 'Coca Cola',
        brand: 'Coca Cola',
        quantity: 12,
        price: 10.88
      },
      {
        location_id: 105,
        name: 'Sprite',
        brand: 'Coca Cola',
        quantity: 39,
        price: 3.98
      },
      {
        location_id: 106,
        name: 'Root Beer',
        brand: 'A&W',
        quantity: 32,
        price: 5.48
      },
      {
        location_id: 107,
        name: 'Sam\'s Cola',
        brand: 'Sam\'s',
        quantity: 24,
        price: 6.24
      },
      //Cookies 
      {
        location_id: 108,
        name: 'Original Chocolate Chip',
        brand: 'Chips Ahoy',
        quantity: 19,
        price: 4.28
      },
      {
        location_id: 109,
        name: 'Chocolate Sandwich Cookies',
        brand: 'Oreo',
        quantity: 27,
        price: 4.28
      },
      {
        location_id: 110,
        name: 'Nutty Buddy',
        brand: 'Little Debbie',
        quantity: 12,
        price: 2.58
      },
      //Gummies
      {
        location_id: 111,
        name: 'Juicy Burst',
        brand: 'Black Forest',
        quantity: 32,
        price: 7.98
      },
      {
        location_id: 112,
        name: 'Mixed Fruit Snacks',
        brand: 'Welch\'s',
        quantity: 78,
        price: 8.48
      },
      {
        location_id: 113,
        name: 'Assorted Fruit Snacks',
        brand: 'Mott\'s',
        quantity: 28,
        price: 7.24
      },
      {
        location_id: 114,
        name: 'Variety Fruit Pack Snacks',
        brand: 'Mott\'s',
        quantity: 29,
        price: 4.97
      },
      //Candy
      {
        location_id: 115,
        name: 'Sour Patch Kids',
        brand: 'Sour Patch Kids',
        quantity: 38,
        price: 1.24
      },
      {
        location_id: 116,
        name: 'Gummy Clusters',
        brand: 'Nerds',
        quantity: 89,
        price: 3.48
      },
      {
        location_id: 117,
        name: 'Skittles',
        brand: 'Skittles',
        quantity: 134,
        price: 1.98
      },
      {
        location_id: 118,
        name: 'Airheads Mini Bars',
        brand: 'Airheads',
        quantity: 100,
        price: 2.28
      },
      {
        location_id: 119,
        name: 'Reese\'s',
        brand: 'Reese\'s',
        quantity: 189,
        price: 1.48
      },
      //Spreads
      {
        location_id: 120,
        name: 'Peanut Butter',
        brand: 'Jif',
        quantity: 40,
        price: 6.78
      },
      {
        location_id: 121,
        name: 'Crunch Peanut Butter',
        brand: 'Jif',
        quantity: 88,
        price: 6.78
      },
      {
        location_id: 122,
        name: 'Nutella',
        brand: 'Nutella',
        quantity: 49,
        price: 8.48
      },
      {
        location_id: 123,
        name: 'Creamy Stripes',
        brand: 'Great Value',
        quantity: 25,
        price: 2.24
      },
      {
        location_id: 124,
        name: 'Peanut Butter',
        brand: 'Great Value',
        quantity: 78,
        price: 3.47
      },
      {
        location_id: 125,
        name: 'Grape Jelly',
        brand: 'Welch\'s',
        quantity: 29,
        price: 2.74
      },
      {
        location_id: 126,
        name: 'Stawberry Jelly',
        brand: 'Welch\'s',
        quantity: 45,
        price: 2.74
      },
      //Produce
      //Blue,straw,blackberries
      {
        location_id: 127,
        name: 'Strawberries',
        brand: 'Great Value',
        quantity: 12,
        price: 2.32
      },
      {
        location_id: 128,
        name: 'Blueberries',
        brand: 'Dole',
        quantity: 33,
        price: 3.33
      },
      {
        location_id: 129,
        name: 'Blackberries',
        brand: 'Great Value',
        quantity: 28,
        price: 3.58
      },
      //Lemon/lime/apples/cherries/Bananas/Oranges
      {
        location_id: 130,
        name: 'Lemons',
        brand: 'Great Value',
        quantity: 87,
        price: .58
      },
      {
        location_id: 131,
        name: 'Limes',
        brand: 'Susie',
        quantity: 89,
        price: .65
      },
      {
        location_id: 132,
        name: 'Limes',
        brand: 'Great Value',
        quantity: 49,
        price: .54
      },
      {
        location_id: 133,
        name: 'Granny Smith Apples',
        brand: 'Great Value',
        quantity: 35,
        price: .88
      },
      {
        location_id: 134,
        name: 'Gala Apples',
        brand: 'Great Value',
        quantity: 76,
        price: .87
      },
      {
        location_id: 135,
        name: 'Fuji Apples',
        brand: 'Great Value',
        quantity: 99,
        price: .78
      },
      {
        location_id: 136,
        name: 'Red Cherries',
        brand: 'Great Value',
        quantity: 11,
        price: 11.18
      },
      {
        location_id: 137,
        name: 'Rainier Cherries',
        brand: 'Dole',
        quantity: 23,
        price: 10.46
      },
      {
        location_id: 138,
        name: 'Bananas',
        brand: 'Great Value',
        quantity: 28,
        price: .23
      },
      {
        location_id: 139,
        name: 'Organic Bananas',
        brand: 'Great Value',
        quantity: 34,
        price: .69
      },
      {
        location_id: 140,
        name: 'Organic Oranges',
        brand: 'Marketside',
        quantity: 88,
        price: 6.88
      },
      {
        location_id: 141,
        name: 'Oranges',
        brand: 'Great Value',
        quantity: 38,
        price: 4.98
      },
      //Zucchini/Squash/Onion/Peppers
      {
        location_id: 142,
        name: 'Zucchini',
        brand: 'Great Value',
        quantity: 39,
        price: .98
      },
      {
        location_id: 143,
        name: 'Squash',
        brand: 'Great Value',
        quantity: 23,
        price: .89
      },
      {
        location_id: 144,
        name: 'Yellow Onion',
        brand: 'Great Value',
        quantity: 54,
        price: .45
      },
      {
        location_id: 145,
        name: 'Red oNion',
        brand: 'Great Value',
        quantity: 43,
        price: .45
      },
      {
        location_id: 146,
        name: 'Red Peppers',
        brand: 'Great Value',
        quantity: 23,
        price: 1.48
      },
      {
        location_id: 147,
        name: '3-Pack Assorted Peppers',
        brand: 'Great Value',
        quantity: 12,
        price: 3.58
      },
      //Tomatoes/Asparagus/Broccoli/Lettuce
      {
        location_id: 148,
        name: 'Roma Tomatoes',
        brand: 'Great Value',
        quantity: 23,
        price: .26
      },
      {
        location_id: 149,
        name: 'Grape Tomatoes',
        brand: 'Great Value',
        quantity: 38,
        price: 1.48
      },
      {
        location_id: 150,
        name: 'Asparagus',
        brand: 'Marketside',
        quantity: 3,
        price: 4.18
      },
      {
        location_id: 151,
        name: 'Broccoli',
        brand: 'Great Value',
        quantity: 33,
        price: 1.31
      },
      {
        location_id: 152,
        name: 'Broccoli',
        brand: 'Marketside',
        quantity: 23,
        price: 2.78
      },
      {
        location_id: 153,
        name: 'Iceburg Lettuce',
        brand: 'Green Giant',
        quantity: 19,
        price: 1.48
      },
      {
        location_id: 154,
        name: 'Shredded Iceburg Lettuce',
        brand: 'Marketside',
        quantity: 12,
        price: 1.98
      },
      {
        location_id: 155,
        name: 'Romaine Lettuce',
        brand: 'Great Value',
        quantity: 21,
        price: 2.62
      },
      //Celery/Carrots/Corn/Green Onions
      {
        location_id: 156,
        name: 'Celery',
        brand: 'Dole',
        quantity: 12,
        price: 1.47
      },
      {
        location_id: 157,
        name: 'Carrots',
        brand: 'Bolthouse',
        quantity: 19,
        price: 1.92
      },
      {
        location_id: 158,
        name: 'Corn',
        brand: 'Great Value',
        quantity: 22,
        price: .50
      },
      {
        location_id: 159,
        name: 'Green Onions',
        brand: 'Great Value',
        quantity: 83,
        price: .48
      },
      //Cooking
      //Sauces
      {
        location_id: 160,
        name: 'Ketchup',
        brand: 'Heinz',
        quantity: 190,
        price: 1.48
      },
      {
        location_id: 161,
        name: 'Mustard',
        brand: 'Heinze',
        quantity: 159,
        price: 1.76
      },
      {
        location_id: 162,
        name: 'Ranch',
        brand: 'Hidden Valley',
        quantity: 83,
        price: 2.39
      },
      {
        location_id: 163,
        name: 'Mayonaise',
        brand: 'Duke\'s',
        quantity: 89,
        price: 1.98
      },
      {
        location_id: 164,
        name: 'BBQ Sauce',
        brand: 'Sweet Baby Ray\'s',
        quantity: 123,
        price: 1.97
      },
      {
        location_id: 165,
        name: 'Steak Sauce',
        brand: 'A1',
        quantity: 198,
        price: 1.78
      },
      //Sugars
      {
        location_id: 166,
        name: 'Granulated Sugar',
        brand: 'Great Value',
        quantity: 12,
        price: 2.57
      },
      {
        location_id: 167,
        name: 'Cane Sugar',
        brand: 'C & H',
        quantity: 32,
        price: 3.25
      },
      {
        location_id: 168,
        name: 'Pure Cane Sugar',
        brand: 'Morena',
        quantity: 43,
        price: 3.18
      },
      {
        location_id: 169,
        name: 'Granulated Sugar',
        brand: 'Domino',
        quantity: 54,
        price: 3.34
      },
      //Spices
      {
        location_id: 170,
        name: 'Garlic Parmesan',
        brand: 'Weber',
        quantity: 44,
        price: 4.42
      },
      {
        location_id: 171,
        name: 'Seasoned Salt',
        brand: 'Lawrys',
        quantity: 78,
        price: 3.68
      },
      {
        location_id: 172,
        name: 'Ground Cinnamon',
        brand: 'Great Value',
        quantity: 82,
        price: 1.18
      },
      {
        location_id: 173,
        name: 'Garlic Powder',
        brand: 'McCormick',
        quantity: 87,
        price: 6.50
      },
      {
        location_id: 174,
        name: 'Paprika',
        brand: 'Great Value',
        quantity: 100,
        price: 1.00
      },
      {
        location_id: 175,
        name: 'Ground Cumin',
        brand: 'Great Value',
        quantity: 29,
        price: 1.28
      },
      //Flour
      {
        location_id: 176,
        name: 'All-Purpose Flour',
        brand: 'Great Value',
        quantity: 12,
        price: 2.12
      },
      {
        location_id: 177,
        name: 'Cake Flour',
        brand: 'Swans Down',
        quantity: 45,
        price: 3.52
      },
      {
        location_id: 178,
        name: 'All-Purpose flour',
        brand: 'Gold Medal',
        quantity: 45,
        price: 3.64
      },
      //Alcohol
      //Red Wine
      {
        location_id: 179,
        name: 'Red Wine Blend',
        brand: 'Apothic',
        quantity: 10,
        price: 11.73
      },
      {
        location_id: 180,
        name: 'Cabernet Sauvignon',
        brand: 'Robert Mondavi',
        quantity: 12,
        price: 8.48
      },
      {
        location_id: 181,
        name: 'Sweet Red Blend',
        brand: 'Duplin',
        quantity: 3,
        price: 7.48
      },
      {
        location_id: 182,
        name: 'Merlot',
        brand: 'Oak Leaf',
        quantity: 23,
        price: 2.96
      },
      //White Wine
      {
        location_id: 183,
        name: 'Pinot Grigio',
        brand: 'Oak Leaf',
        quantity: 24,
        price: 2.96
      },
      {
        location_id: 184,
        name: 'Pinot Grigio',
        brand: 'Barefoot',
        quantity: 12,
        price: 11.48
      },
      {
        location_id: 185,
        name: 'Chardonnay',
        brand: 'J. Lohr',
        quantity: 27,
        price: 13.48
      },
      {
        location_id: 186,
        name: 'Sauvignon Blanc',
        brand: 'Cupcake',
        quantity: 1,
        price: 7.98
      },
      //Domestic Beer
      {
        location_id: 187,
        name: 'Light Beer',
        brand: 'Michelob ULTRA',
        quantity: 20,
        price: 20.48
      },
      {
        location_id: 188,
        name: 'Light Beer',
        brand: 'Bud Light',
        quantity: 23,
        price: 18.48
      },
      {
        location_id: 189,
        name: 'Light Beer',
        brand: 'Miller Lite',
        quantity: 24,
        price: 18.48
      },
      //Craft Beer
      {
        location_id: 190,
        name: 'IPA Craft Beer',
        brand: 'Elysian',
        quantity: 12,
        price: 12.48
      },
      {
        location_id: 191,
        name: '420 Extra Pale Ale',
        brand: 'Sweetwater',
        quantity: 24,
        price: 17.48
      },
      {
        location_id: 192,
        name: 'Summer Shandy',
        brand: 'Leinenkugel',
        quantity: 11,
        price: 9.48
      },
      {
        location_id: 193,
        name: 'IPA Craft Beer',
        brand: 'Goose Island',
        quantity: 14,
        price: 16.98
      },
      //Frozen Drinks
      {
        location_id: 194,
        name: 'Escapes Variety Pack',
        brand: 'Seagrams',
        quantity: 18,
        price: 14.48
      },
      {
        location_id: 195,
        name: 'Italian Ice',
        brand: 'Seagrams',
        quantity: 12,
        price: 14.48
      },
      {
        location_id: 196,
        name: 'Strawberry Margarita',
        brand: 'Daily\'s',
        quantity: 22,
        price: 1.88
      },
      {
        location_id: 197,
        name: 'Bahama Mama',
        brand: 'Daily\'s',
        quantity: 19,
        price: 1.88
      },
      {
        location_id: 198,
        name: 'Hurricane',
        brand: 'Daily\'s',
        quantity: 7,
        price: 1.88
      }
  ])
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('productdetails', null, {})
  }
};
