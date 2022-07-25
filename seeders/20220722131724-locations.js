'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 2
      },{
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 2
      },{
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'B',
        shelf_div: 5
      },
      {
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 2
      },{
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 2
      },{
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 5
      },
      {
        sections: 'Dairy',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 1
      },{
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 2
      },
      {
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 1
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 2
      },{
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 3
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 4
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 5
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 6
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 7
      },{
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 8
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 9
      },
      {
        sections: 'Dairy',
        shelf_letter: 'F',
        shelf_div: 10
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 2
      },{
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        sections: 'Frozen',
        shelf_letter: 'A',
        shelf_div: 7
      },{
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Frozen',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 1
      },{
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 6
      },{
        sections: 'Frozen',
        shelf_letter: 'C',
        shelf_div: 7
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 4
      },{
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 5
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 7
      },
      {
        sections: 'Frozen',
        shelf_letter: 'D',
        shelf_div: 8
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 1
      },{
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 4
      },{
        sections: 'Breakfast',
        shelf_letter: 'B',
        shelf_div: 5
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'C',
        shelf_div: 4
      },{
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 5
      },{
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 7
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 8
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'D',
        shelf_div: 9
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 1
      },{
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 2
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'E',
        shelf_div: 5
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 2
      },{
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        sections: 'Snacks',
        shelf_letter: 'A',
        shelf_div: 7
      },{
        sections: 'Snacks',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 'Snacks',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Snacks',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 1
      },{
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Snacks',
        shelf_letter: 'C',
        shelf_div: 6
      },{
        sections: 'Snacks',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        sections: 'Snacks',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Snacks',
        shelf_letter: 'E',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'E',
        shelf_div: 2
      },{
        sections: 'Snacks',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        sections: 'Snacks',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'F',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'F',
        shelf_div: 2
      },
      {
        sections: 'Snacks',
        shelf_letter: 'F',
        shelf_div: 3
      },{
        sections: 'Snacks',
        shelf_letter: 'F',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'F',
        shelf_div: 5
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 1
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 2
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 3
      },{
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 4
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 5
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 6
      },
      {
        sections: 'Snacks',
        shelf_letter: 'G',
        shelf_div: 7
      },
      {
        sections: 'Produce',
        shelf_letter: 'A',
        shelf_div: 1
      },{
        sections: 'Produce',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Produce',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 3
      },{
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 5
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 6
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 7
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 8
      },{
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 9
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 10
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 11
      },
      {
        sections: 'Produce',
        shelf_letter: 'B',
        shelf_div: 12
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 1
      },{
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 6
      },{
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 5
      },{
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 6
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 7
      },
      {
        sections: 'Produce',
        shelf_letter: 'D',
        shelf_div: 8
      },
      {
        sections: 'Produce',
        shelf_letter: 'E',
        shelf_div: 1
      },
      {
        sections: 'Produce',
        shelf_letter: 'E',
        shelf_div: 2
      },{
        sections: 'Produce',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        sections: 'Produce',
        shelf_letter: 'E',
        shelf_div: 4
      },
      {
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 3
      },{
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Cooking',
        shelf_letter: 'A',
        shelf_div: 6
      },
      {
        sections: 'Cooking',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Cooking',
        shelf_letter: 'B',
        shelf_div: 2
      },{
        sections: 'Cooking',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Cooking',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 1
      },
      {
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 3
      },{
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Cooking',
        shelf_letter: 'C',
        shelf_div: 6
      },
      {
        sections: 'Cooking',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Cooking',
        shelf_letter: 'D',
        shelf_div: 2
      },{
        sections: 'Cooking',
        shelf_letter: 'D',
        shelf_div: 3
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'B',
        shelf_div: 4
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'C',
        shelf_div: 1
      },{
        sections: 'Alcohol',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'D',
        shelf_div: 1
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'D',
        shelf_div: 2
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'D',
        shelf_div: 3
      },{
        sections: 'Alcohol',
        shelf_letter: 'D',
        shelf_div: 4
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'E',
        shelf_div: 1
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'E',
        shelf_div: 2
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'E',
        shelf_div: 3
      },
      {
        sections: 'Alcohol',
        shelf_letter: 'E',
        shelf_div: 4
      },{
        sections: 'Alcohol',
        shelf_letter: 'E',
        shelf_div: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {})
  }
};
