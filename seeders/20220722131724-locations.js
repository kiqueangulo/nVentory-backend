'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        product_id: 1,
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        product_id: 2,
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        product_id: 3,
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        product_id: 4,
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        product_id: 5,
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        product_id: 6,
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        product_id: 7,
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        product_id: 8,
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        product_id: 9,
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        product_id: 10,
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 5
      },
      {
        product_id: 11,
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        product_id: 12,
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        product_id: 13,
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        product_id: 14,
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        product_id: 15,
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        product_id: 16,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        product_id: 17,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        product_id: 18,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        product_id: 19,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        product_id: 20,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 5
      },
      {
        product_id: 21,
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        product_id: 22,
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 1
      },
      {
        product_id: 23,
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 2
      },
      {
        product_id: 24,
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        product_id: 25,
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        product_id: 26,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 1
      },
      {
        product_id: 27,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 2
      },
      {
        product_id: 28,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 3
      },
      {
        product_id: 29,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 4
      },
      {
        product_id: 30,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 5
      },
      {
        product_id: 31,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 6
      },
      {
        product_id: 32,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 7
      },
      {
        product_id: 33,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 8
      },
      {
        product_id: 34,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 9
      },
      {
        product_id: 35,
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 10
      },
      {
        product_id: 36,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        product_id: 37,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        product_id: 38,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        product_id: 39,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        product_id: 40,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        product_id: 41,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        product_id: 42,
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 7
      },
      {
        product_id: 43,
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        product_id: 44,
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        product_id: 45,
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        product_id: 46,
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        product_id: 47,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        product_id: 48,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        product_id: 49,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        product_id: 50,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        product_id: 51,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        product_id: 52,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 6
      },
      {
        product_id: 53,
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 7
      },
      {
        product_id: 54,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        product_id: 55,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        product_id: 56,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        product_id: 57,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        product_id: 58,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 5
      },
      {
        product_id: 59,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        product_id: 60,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 7
      },
      {
        product_id: 61,
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 8
      },
      {
        product_id: 62,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        product_id: 63,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        product_id: 64,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        product_id: 65,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        product_id: 66,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        product_id: 67,
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        product_id: 68,
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        product_id: 69,
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        product_id: 70,
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        product_id: 71,
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        product_id: 72,
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 5
      },
      {
        product_id: 73,
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        product_id: 74,
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        product_id: 75,
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        product_id: 76,
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        product_id: 77,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        product_id: 78,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        product_id: 79,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        product_id: 80,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        product_id: 81,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 5
      },
      {
        product_id: 82,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        product_id: 83,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 7
      },
      {
        product_id: 84,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 8
      },
      {
        product_id: 85,
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 9
      },
      {
        product_id: 86,
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 1
      },
      {
        product_id: 87,
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 2
      },
      {
        product_id: 88,
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        product_id: 89,
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        product_id: 90,
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 5
      },
      {
        product_id: 91,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        product_id: 92,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        product_id: 93,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        product_id: 94,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        product_id: 95,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        product_id: 96,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        product_id: 97,
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 7
      },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'B',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'B',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'B',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'B',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 1
      // },{
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'C',
      //   shelf_div: 6
      // },{
      //   sections: 'Snacks',
      //   shelf_letter: 'D',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'D',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'D',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'E',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'E',
      //   shelf_div: 2
      // },{
      //   sections: 'Snacks',
      //   shelf_letter: 'E',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'E',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'F',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'F',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'F',
      //   shelf_div: 3
      // },{
      //   sections: 'Snacks',
      //   shelf_letter: 'F',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'F',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 3
      // },{
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 6
      // },
      // {
      //   sections: 'Snacks',
      //   shelf_letter: 'G',
      //   shelf_div: 7
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'A',
      //   shelf_div: 1
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'A',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'A',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 3
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 6
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 7
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 8
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 9
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 10
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 11
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'B',
      //   shelf_div: 12
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 1
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'C',
      //   shelf_div: 6
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 5
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 6
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 7
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'D',
      //   shelf_div: 8
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'E',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'E',
      //   shelf_div: 2
      // },{
      //   sections: 'Produce',
      //   shelf_letter: 'E',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Produce',
      //   shelf_letter: 'E',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 3
      // },{
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'A',
      //   shelf_div: 6
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'B',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'B',
      //   shelf_div: 2
      // },{
      //   sections: 'Cooking',
      //   shelf_letter: 'B',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'B',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 3
      // },{
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 5
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'C',
      //   shelf_div: 6
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'D',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Cooking',
      //   shelf_letter: 'D',
      //   shelf_div: 2
      // },{
      //   sections: 'Cooking',
      //   shelf_letter: 'D',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'A',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'A',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'A',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'A',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'B',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'B',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'B',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'B',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'C',
      //   shelf_div: 1
      // },{
      //   sections: 'Alcohol',
      //   shelf_letter: 'C',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'C',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'D',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'D',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'D',
      //   shelf_div: 3
      // },{
      //   sections: 'Alcohol',
      //   shelf_letter: 'D',
      //   shelf_div: 4
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'E',
      //   shelf_div: 1
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'E',
      //   shelf_div: 2
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'E',
      //   shelf_div: 3
      // },
      // {
      //   sections: 'Alcohol',
      //   shelf_letter: 'E',
      //   shelf_div: 4
      // },{
      //   sections: 'Alcohol',
      //   shelf_letter: 'E',
      //   shelf_div: 5
      // },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {})
  }
};
