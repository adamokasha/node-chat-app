const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'John',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Jane',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jdoe',
      room: 'Room'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);  
  });

  it('should remove a user', () => {
    var removedUser = users.removeUser('1');
    expect(users.users).toEqual([{
      id: '2',
      name: 'John',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Jane',
      room: 'Node Course'
    }]);

    expect(removedUser).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    })
  });

  it('should not remove a user', () => {
    var removedUser = users.removeUser('10');
    expect(removedUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('3');
    expect(user).toEqual(users.users[2]);
  });

  it('should not find user', () => {
    var user = users.getUser('13');
    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Jane']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['John']);
  });
});