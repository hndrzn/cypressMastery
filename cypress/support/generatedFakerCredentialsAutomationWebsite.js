import { faker } from '@faker-js/faker';

export function placeOrderData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;
  const randomNumber = faker.string.numeric(2);

  const username = `${firstName.toLowerCase()}${randomNumber}`;
  const email = faker.internet.email({ firstName, lastName, provider: 'example.com' });

  const companyName = faker.company.buzzVerb();
  const capitalizedCompanyName = companyName.charAt(0).toUpperCase() + companyName.slice(1);
  const company = `${capitalizedCompanyName} Solutions`;

  const street = faker.location.streetAddress();
  const poBox = `P.O. Box ${faker.string.numeric(4)}`;

  const address = `${street}, ${poBox}, ${company}`;

  const loginEmail = "helforexample@gmail.com";
  const loginPass = "sickomode123";
  const loginUsername = "Hel2001";
  const loginFirstName = "Hel";
  const loginLastName = "Hello";
  const loginCompany = "Hel's Company and Friends";
  const loginAddress = "1013 Downtown, Hel's Company and Friends";
  const loginAddress2 = "8032, Hel's Company and Friends";
  const loginCity = "Makati";
  const loginState = "Philippines";
  const loginZipCode = "sys24 be";
  const loginPhoneNumber = "09442231";
  const loginFullName = `${loginFirstName} ${loginLastName}`;

  return {
    username,
    email,
    firstName,
    lastName,
    fullName,
    password: 'passw0rd',
    company,
    address,
    address2: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    cardNumber: faker.finance.creditCardNumber(),
    cvc: faker.finance.creditCardCVV(),
    expiryMonth: faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0'),
    expiryYear: faker.number.int({ min: 2026, max: 2050 }).toString(),
    loginEmail,
    loginPass,
    loginUsername,
    loginFirstName,
    loginLastName,
    loginCompany,
    loginAddress,
    loginAddress2,
    loginCity,
    loginState,
    loginZipCode,
    loginPhoneNumber,
    loginFullName
  };
}
