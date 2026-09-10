import { getUserProfile, fetchGithubUserRepos } from './github-api.js';
import { showLoading, showMessage, showProfile } from './profile-view.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

async function handleSearch() {
    const userName = inputSearch.value.trim();

    if (userName) {
        showLoading();

        try {
            const userData = await getUserProfile(userName);
            const userRepos = await fetchGithubUserRepos(userName);
            showProfile(userData, userRepos);
        } catch (error) {
            if (error.message === 'USER_NOT_FOUND') {
                showMessage('Usuário não encontrado. Verifique o nome e tente novamente.');
                return;
            }

            console.error('Erro ao buscar o perfil do usuário:', error);
            showMessage('Ocorreu um erro ao buscar o perfil. Tente novamente mais tarde.');
        }
    } else {
        showMessage('Por favor, digite um nome de usuário do GitHub.');
    }
}

btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
