const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');

describe('UserService Test', () => {
  let useService;

  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => ({ login }));

  beforeEach(() => {
    useService = new UserService(new UserClient());
    // login.mockClear()
    // UserClient.mockClear()
  });

  it('calls login() on UserClient when tries to login', async () => {
    await useService.login('testID', 1234);
    // expect(login.mock.calls.length).toBe(1);
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await useService.login('testID', 1234);
    await useService.login('testID', 1234);
    expect(login.mock.calls.length).toBe(1);
  });
});
