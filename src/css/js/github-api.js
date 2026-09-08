const BASE_URL = 'https://api.github.com';

export async function getUserProfile(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        throw new Error('USER_NOT_FOUND');
    }

    return response.json();
}