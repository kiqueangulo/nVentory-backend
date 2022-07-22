'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Meat',
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 'Condiments',
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 'Juices',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Meat',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Bread',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Meat',
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 'Meat',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 'Breakfast',
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 'Adult Beverages',
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 'Adult Beverages',
        shelf_letter: 'A',
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
        shelf_div: 1
      },
      {
        sections: 'Produce',
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 'Dairy',
        shelf_letter: 'A',
        shelf_div: 1
      },


    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {})
  }
};
