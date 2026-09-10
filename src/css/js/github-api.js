const BASE_URL = 'https://api.github.com';

export async function getUserProfile(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        throw new Error('USER_NOT_FOUND');
    }

    return response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error('Repositórios não encontrados');
    }

    return response.json();
}