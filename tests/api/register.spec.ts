import { test, expect } from '@playwright/test';
import { getBaseApiUrl, getApiKey } from '../../utils/apiConfigUtils';
import { createAccountsData } from '../../data/api/register/createAccountData';
import { updateAccountsData } from '../../data/api/register/updateAccountsData';

test.describe('Register API Tests', () => {
  const baseApiUrl = getBaseApiUrl();
  const apiKey = getApiKey();
  const idsArray: string[] = [];

  test(`Verify user can register accounts via POST /api/users`, async ({
    request,
  }) => {
    for (const createAccountData of createAccountsData) {
      const createUserPayload = {
        firstName: createAccountData.firstName,
        lastName: createAccountData.lastName,
        gender: createAccountData.gender,
        birthDay: createAccountData.birthDay,
      };

      const createUserEndpoint = `${baseApiUrl}/api/users`;
      const response = await request.post(createUserEndpoint, {
        data: createUserPayload,
        headers: { 'x-api-key': apiKey },
      });

      expect(response.status()).toBe(201);

      const responseBody = await response.json();
      expect(responseBody).toHaveProperty(
        'firstName',
        createUserPayload.firstName
      );
      expect(responseBody).toHaveProperty(
        'lastName',
        createUserPayload.lastName
      );
      expect(responseBody).toHaveProperty('gender', createUserPayload.gender);
      expect(responseBody).toHaveProperty(
        'birthDay',
        createUserPayload.birthDay
      );
      expect(responseBody).toHaveProperty('id');
      idsArray.push(responseBody.id);
    }
  });

  test('Verify user can update an account via PUT /api/users/{userId}', async ({
    request,
  }) => {
    const randomAccount =
      updateAccountsData[Math.floor(Math.random() * updateAccountsData.length)];
    const randomId = idsArray[Math.floor(Math.random() * idsArray.length)];

    const updateUserPayload = {
      firstName: randomAccount.firstName,
      lastName: randomAccount.lastName,
      gender: randomAccount.gender,
      birthDay: randomAccount.birthDay,
    };

    const updateUserEndpoint = `${baseApiUrl}/api/users/${randomId}`;

    const response = await request.put(updateUserEndpoint, {
      data: updateUserPayload,
      headers: { 'x-api-key': apiKey },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty(
      'firstName',
      updateUserPayload.firstName
    );
    expect(responseBody).toHaveProperty('lastName', updateUserPayload.lastName);
    expect(responseBody).toHaveProperty('gender', updateUserPayload.gender);
    expect(responseBody).toHaveProperty('birthDay', updateUserPayload.birthDay);
  });

  test('Verify user can delete accounts via DELETE /api/users/{userId}', async ({
    request,
  }) => {
    const idsToDelete = idsArray.slice(0, 2);

    for (const id of idsToDelete) {
      const deleteUserEndpoint = `${baseApiUrl}/api/users/${id}`;

      const response = await request.delete(deleteUserEndpoint, {
        headers: { 'x-api-key': apiKey },
      });

      expect(response.status()).toBe(204);
      const responseBody = await response.json().catch(() => ({}));
      expect(responseBody).toEqual({});
    }
  });  
});
