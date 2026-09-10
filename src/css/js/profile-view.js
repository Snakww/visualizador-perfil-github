const profileResults = document.querySelector('.profile-results');

function escapeHtml(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

export function showLoading() {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function showProfile(userData, userRepos) {
    const name = escapeHtml(userData.name || userData.login);
    const bio = escapeHtml(userData.bio || 'Não possui bio cadastrada.');
    const avatarUrl = escapeHtml(userData.avatar_url);

    const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
        <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">
            <h3>${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐ ${repo.stargazers_count}</span>
                <span>🍴 ${repo.forks_count}</span>
                <span>👀 ${repo.watchers_count}</span>
                <span>📝 ${repo.language || 'N/A'}</span>
        </div>
        </a>
        </div>
        `).join('') : '<p>Nenhum repositório encontrado.</p>';

    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${avatarUrl}" alt="Avatar de ${name}" class="profile avatar">
            <div class="profile-info">
                <h2>${name}</h2>
                <p>${bio}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h3>Repositórios</h3>
            <div class="repositories">
            ${repositoriesHTML}
            </div>
            </div>
    `;
}

export function showMessage(message) {
    profileResults.innerHTML = `<p>${escapeHtml(message)}</p>`;
}
