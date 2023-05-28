import { User, UserReponse } from '../types';

const USER_API_URL = 'https://mockend.com/api/pgilgunn/coding-test/users';

export const createUser = async (user: User): Promise<UserReponse | undefined> => {
  try {
    const response = await fetch(USER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create new user');
  }
};
