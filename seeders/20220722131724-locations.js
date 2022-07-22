'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        sections: 1,
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 2,
        shelf_letter: 'A',
        shelf_div: 5
      },
      {
        sections: 3,
        shelf_letter: 'B',
        shelf_div: 3
      },
      {
        sections: 4,
        shelf_letter: 'C',
        shelf_div: 5
      },
      {
        sections: 5,
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 1,
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 2,
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 6,
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 2,
        shelf_letter: 'A',
        shelf_div: 3
      },
      {
        sections: 2,
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 1,
        shelf_letter: 'A',
        shelf_div: 4
      },
      {
        sections: 4,
        shelf_letter: 'C',
        shelf_div: 4
      },
      {
        sections: 4,
        shelf_letter: 'C',
        shelf_div: 3
      },
      {
        sections: 9,
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 7,
        shelf_letter: 'A',
        shelf_div: 2
      },
      {
        sections: 7,
        shelf_letter: 'A',
        shelf_div: 1
      },
      {
        sections: 8,
        shelf_letter: 'B',
        shelf_div: 2
      },
      {
        sections: 8,
        shelf_letter: 'B',
        shelf_div: 1
      },
      {
        sections: 4,
        shelf_letter: 'C',
        shelf_div: 2
      },
      {
        sections: 1,
        shelf_letter: 'A',
        shelf_div: 1
      },


    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {})
  }
};
