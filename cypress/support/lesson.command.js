let userApiResponse;

Cypress.Commands.add('sendUserApiRequest', () => {
  return cy.request({
    method: 'GET',
    url: 'https://gorest.co.in/public/v2/users'
  }).then((res) => {
    userApiResponse = res;
  });
});

Cypress.Commands.add('verifySuccessResponse', () => {
  expect(userApiResponse.status).to.eq(200);
});