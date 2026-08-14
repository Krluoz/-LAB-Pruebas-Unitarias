const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers).not.toContain(user);
  });
  
test('findByEmail user to userController', () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org")
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toBe(user)
})

test("findByEmail user to userController", () =>{
  expect(userController.findByEmail("carlos@generation.org")).toBeUndefined();
})

test("findById user to userController", () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toBe(user)
})

test("findById user to userController", () =>{
  expect(userController.findById(1111)).toBeUndefined();
})