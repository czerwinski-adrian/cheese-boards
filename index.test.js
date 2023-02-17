//Connections
const { describe } = require('node:test');
const {sequelize} = require('./connections/db.js');
const {Board, Cheese, User} = require('./index.js')

//Test - Tbales Created
describe('Board, Cheese, User models', () => {
    beforeAll(async () => {
        // This code will happen at the start of this files testing
        await sequelize.sync({ force: true });
      });
      
      beforeEach(async () => {
        // This code will happen before each test/it block
      });
      
      afterEach(async () => {
        // This code will happen after each test/it block
        await User.sync({ force: true });
        await Cheese.sync({ force: true });
        await Board.sync({ force: true });
      });
      
      afterAll(async () => {
        // This code will happen after all tests in this file are finished
        await sequelize.drop();
      });

//User Tes
test('can create a User', async () => {
    let user = User.create({name: 'Adrian', email: 'adrian@email.com'})

    expect(user.name).toBe('Adrian');
    expect(user.email).toBe('adrian@email.com');
});

//Board Test
test('can create a Board', async () => {
    let board = Board.create({type: 'Master', description: 'Best Board', rating: 5})

    expect(board.name).toBe('Master');
    expect(board.description).toBe('Best Board');
    expect(board.rating).toBe(5);
});

//Cheese Test
test('can create a Cheese', async () => {
    let cheese = Cheese.create({title: 'Brie', description: 'Soft Cheese'})

    expect(cheese.title).toBe('Brie');
    expect(cheese.description).toBe('Soft Cheese');
});


});