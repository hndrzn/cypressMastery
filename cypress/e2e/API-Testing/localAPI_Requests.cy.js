import { faker } from '@faker-js/faker';

describe('User API Tests', () => {
  
  let userId;
  let createdUserName;
  let createdUserEmail;

  // POST request - Register user successfully
  it('Should create a user successfully', () => {
    const newUser = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: 'password123',
    };

    cy.api({
      method: 'POST',
      url: 'http://localhost:3000/api/users/register',
      body: newUser,
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('User registered');
      expect(response.body.user).to.have.property('id');
      expect(response.body.user.name).to.eq(newUser.name);
      expect(response.body.user.email).to.eq(newUser.email);

      // Store the user details for later assertions
      userId = response.body.user.id;
      createdUserName = response.body.user.name;
      createdUserEmail = response.body.user.email;
    });
  });

  // POST request - Login user successfully
  it('Should successfuly login with registered credentials', () => {
    const login =
    {
      'email': createdUserEmail,
      'password': 'password123'
    }
    cy.api({
      method: 'POST',
      url: 'http://localhost:3000/api/users/login',
      headers: {
        'Authorization': 'Bearer STATIC_TOKEN_123',
      },
      body: login,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token', 'STATIC_TOKEN_123');
    });
  });

  // GET request - Get User by ID successfully
  it('Should successfully get the created user by ID', () => {
    cy.api({
      method: 'GET',
      url: 'http://localhost:3000/api/users/' + userId,
      headers: {
        'Authorization': 'Bearer STATIC_TOKEN_123',
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', userId);
      expect(response.body).to.have.property('name', createdUserName);
      expect(response.body).to.have.property('email', createdUserEmail);
    });
  });

  // GET request - Get all registered users successfully
  it('Should get all users successfully', () => {
    cy.api({
      method: 'GET',
      url: 'http://localhost:3000/api/users/',
      headers: {
        'Authorization': 'Bearer STATIC_TOKEN_123',
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      response.body.forEach((user) => {
        expect(user).to.have.property('name');
        expect(user).to.have.property('email');
        expect(user).to.have.property('id');
      });
    });
  });

  // PUT request - Update user successfully
  it('Should successfully update a user by ID', () => {
    const updatedUser = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: 'Hel2001_',
    };

    cy.api({
      method: 'PUT',
      url: 'http://localhost:3000/api/users/' + userId,
      headers: {
        'Authorization': 'Bearer STATIC_TOKEN_123',
      },
      body: updatedUser,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('User updated');
      expect(response.body.user).to.have.property('id');
      expect(response.body.user.name).to.eq(updatedUser.name);
      expect(response.body.user.email).to.eq(updatedUser.email);
    });
  });

    // PATCH request - Partially update user 
    it('Should successfully partially update a user by ID', () => {
      const patchUser = {
        name: faker.person.firstName(),
      };
  
      cy.api({
        method: 'PATCH',
        url: 'http://localhost:3000/api/users/' + userId,
        headers: {
          'Authorization': 'Bearer STATIC_TOKEN_123',
        },
        body: patchUser,
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('User patched');
        expect(response.body).to.have.property('user');
      });
    });

    // DELETE request - Delete a user
    it('Should successfully delete a user by ID', () => {
      cy.api({
        method: 'DELETE',
        url: 'http://localhost:3000/api/users/' + userId,
        headers: {
          'Authorization': 'Bearer STATIC_TOKEN_123',
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'User deleted');
      });
    });

});