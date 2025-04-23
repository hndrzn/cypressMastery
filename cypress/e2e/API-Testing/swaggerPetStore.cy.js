let petId; // Shared variable to store the pet ID
let orderId; // Shared variable to store the order ID
let userName;

describe('Pet Store API Tests', () => {
  const pet = {
    id: 12345,
    name: 'Fulgoso',
    status: 'available',
  };

  const updatedPet = {
    id: 12345,
    name: 'Fulgoso Updated',
    status: 'sold',
  };

  // Create a pet before running the tests
  before(() => {
    cy.api({
      method: 'POST',
      url: '/pet',
      body: pet,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', pet.id);
      petId = response.body.id;
    });
  });

  // Clean up by deleting the pet after all tests
  after(() => {
    cy.api({
      method: 'DELETE',
      url: `/pet/${petId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('PUT - Update an existing pet', () => {
    cy.wrap(petId).should('exist'); // Ensure petId exists

    cy.api({
      method: 'PUT',
      url: '/pet',
      body: updatedPet,
    }).then((response) => {
      expect(response.status).to.eq(200); // Validate status code
      expect(response.body).to.have.property('id', petId); // Validate response body
      expect(response.body).to.have.property('name', updatedPet.name);
      expect(response.body).to.have.property('status', updatedPet.status);
    });
  });

  it('GET - Find pet by ID', () => {
    cy.wrap(petId).should('exist');
    cy.waitUntil(
      () =>
        cy.api({
          method: 'GET',
          url: `/pet/${petId}`,
        }).should((response) => {
          expect(response.status).to.eq(200);
          return response.body.name === updatedPet.name;
        }),
      {
        timeout: 10000,
        interval: 1000,
      }
    );
    cy.api({
      method: 'GET',
      url: `/pet/${petId}`,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', petId);
      expect(response.body).to.have.property('name', updatedPet.name);
    });
  });

  it('GET - Ensure no sensitive data is exposed', () => {
    cy.wrap(petId).should('exist');

    cy.api({
      method: 'GET',
      url: `/pet/${petId}`,
    }).should((response) => {
      expect(response.body).to.not.have.property('bearer-token');
      expect(response.body).to.not.have.property('access-token');
      expect(response.body).to.not.have.property('jwt-token');
      expect(response.body).to.not.have.property('password');
      expect(response.body).to.not.have.property('api_key');
    });
  });
});

// Test Suite for STORE endpoint of SwaggerUI Pet Store Website
describe('Petstore API - STORE endpoint', () => {
  it('GET - Fetch store inventory', () => {
    cy.api({
      method: 'GET',
      url: '/store/inventory',
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Expects that the value for each key property in the response body is an integer
      expect(response.body).to.have.property('sold').that.is.a('number').and.to.satisfy(Number.isInteger);
      expect(response.body).to.have.property('placed').that.is.a('number').and.to.satisfy(Number.isInteger);
      expect(response.body).to.have.property('string').that.is.a('number').and.to.satisfy(Number.isInteger);
      expect(response.body).to.have.property('pending').that.is.a('number').and.to.satisfy(Number.isInteger);
      expect(response.body).to.have.property('available').that.is.a('number').and.to.satisfy(Number.isInteger);
    });
  });

  it('POST - Place an order for a pet', () => {
    cy.api({
      method: 'POST',
      url: '/store/order',
      body: {
        id: 10,
        petId: 1,
        quantity: 1,
        shipDate: '2025-04-22T11:00:00.000Z',
        status: 'placed',
        complete: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 10);
      expect(response.body).to.have.property('petId', 1);
      expect(response.body).to.have.property('quantity', 1);
      expect(response.body).to.have.property('shipDate');
      expect(response.body).to.have.property('status', 'placed');
      expect(response.body).to.have.property('complete', true);
      orderId = response.body.id; 
    });
  });

  it('GET - Fetch order by ID', () => {
    cy.wrap(orderId).should('exist'); 

    cy.api({
      method: 'GET',
      url: `/store/order/${orderId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', orderId);
      expect(response.body).to.have.property('petId', 1);
      expect(response.body).to.have.property('quantity', 1);
      expect(response.body).to.have.property('shipDate');
      expect(response.body).to.have.property('status', 'placed');
      expect(response.body).to.have.property('complete', true);
    });
  });

  it('DELETE - Delete order by ID', () => {
    cy.wrap(orderId).should('exist'); 

    cy.api({
      method: 'DELETE',
      url: `/store/order/${orderId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', "10");
    });
  });
});

// Test Suite for USERS endpoint of SwaggerUI Pet Store Website
describe('Petstore API - USERS endpoint', () => {
  it('POST - Create a new user', () => {
    const user = {
      id: 1,
      username: 'Hel2001',
      firstName: 'Hel',
      lastName: 'Hello',
      email: 'hellohel@example.com',
      password: 'password123',
      phone: '1234567890',
      userStatus: 1,
    };

    cy.api({
      method: 'POST',
      url: '/user',
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', '1');
      userName = user.username;
    });
  });

  it('GET - Fetch user details', () => {
    cy.wrap(userName).should('exist'); 
    cy.api({
      method: 'GET',
      url: `/user/${userName}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('username', 'Hel2001');
      expect(response.body).to.have.property('firstName', 'Hel');
      expect(response.body).to.have.property('lastName', 'Hello');
      expect(response.body).to.have.property('email', 'hellohel@example.com');
    });
  });

  it('PUT - Update user details', () => {
    const newUser = {
      id: 1,
      username: 'Hel2025',
      firstName: 'Helsworth',
      lastName: 'Helmsy',
      email: 'helsworthd@example.com',
      password: 'newpassword123',
      phone: '0987654321',
      userStatus: 1,
    };
    cy.wrap(userName).should('exist'); 
    cy.api({
      method: 'PUT',
      url: `/user/${userName}`,
      body: newUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', '1');
      userName = newUser.username;
    });
  });

  it('GET - User login', () => {
    cy.api({
      method: 'GET',
      url: '/user/login',
      qs: {
        username: 'Hel2025',
        password: 'newpassword123',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message').and.to.include('logged in');
    });
  });

  it('GET - User logout', () => {
    cy.api({
      method: 'GET',
      url: '/user/logout',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message').and.to.include('ok');
    });
  });

  it('DELETE - Delete user by username', () => {
    cy.wrap(userName).should('exist'); 
    cy.api({
      method: 'DELETE',
      url: `/user/${userName}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message').and.to.include(userName);
    });
  });

  it('POST - Create users with array', () => {
    cy.api({
      method: 'POST',
      url: '/user/createWithArray',
      body: [
        {
          id: 2,
          username: 'Hendersons099',
          firstName: 'Henderson',
          lastName: 'Lapid',
          email: 'hlapid1@example.com',
          password: 'password1234',
          phone: '099762115',
          userStatus: 1,
        },
        {
          id: 3,
          username: 'Chsca211',
          firstName: 'Chesca',
          lastName: 'Lapid',
          email: 'clapid211@example.com',
          password: 'password12345',
          phone: '0671146821',
          userStatus: 1,
        },
      ],
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'ok');
    });
  });

  it('POST - Create users with list', () => {
    cy.api({
      method: 'POST',
      url: '/user/createWithList',
      body: [
        {
          id: 4,
          username: 'Aira505',
          firstName: 'Aira',
          lastName: 'Lapid',
          email: 'alapid505@example.com',
          password: 'password123',
          phone: '024776812',
          userStatus: 1,
        },
        {
          id: 5,
          username: 'Ivy21',
          firstName: 'Ivy',
          lastName: 'Lapid',
          email: 'lapidivy@example.com',
          password: 'password123',
          phone: '067781942',
          userStatus: 1,
        },
      ],
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'ok');
    });
  });
});