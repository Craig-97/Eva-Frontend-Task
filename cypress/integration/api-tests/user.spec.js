describe('USER API tests', () => {
  // Tests User API GET request
  it('fetches users - GET', () => {
    cy.request('/users').as('userRequest');

    cy.get('@userRequest').then(getUserResponse => {
      expect(getUserResponse.status).to.eq(200);
      const users = getUserResponse.body;
      // Ensures the request reponse has returned an array
      assert.isArray(users, 'user response is an array');
      // Ensures the arrays first object has an id equal to 1
      expect(users?.[0]?.id).to.equal(1);
    });
  });

  it('create new user - POST', () => {
    let userData = {};
    cy.fixture('createUser.json').then(user => (userData = user));

    cy.request('POST', '/users', userData).as('userRequest');

    cy.get('@userRequest').then(createUserResponse => {
      expect(createUserResponse.status).to.eq(201);
      const user = createUserResponse.body;
      // Ensures the request reponse has returned an object
      assert.isObject(user, 'user response is an object');
      // Ensures the user response contains a numerical ID
      expect(user?.id).to.satisfy(Number.isInteger);
    });
  });
});
