import axios from 'axios';

const urlGitHubApi = 'https://api.github.com';

export const fetchGitRepositories = (organization) => axios.get(`${urlGitHubApi}/orgs/${organization}/repos?per_page=100&sort=pushed`);
export const fetchGitRepository = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}`);
export const fetchLanguages = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/languages`);
export const fetchContributors = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/contributors?per_page=100`);
export const fetchReleases = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/releases?per_page=100`);
export const fetchBranches = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/branches?per_page=100`);
export const fetchTags = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/tags?per_page=100`);
export const fetchCommits = (repository) => axios.get(`${urlGitHubApi}/repos/${repository}/commits?per_page=100`);

const getAllDataFromRepository = (gitRepository, languages, contributors, releases, branches, tags, commits) => {
    return {
        fullName: gitRepository.data.full_name,
        description: gitRepository.data.description,
        owner: {
            name: gitRepository.data.owner.login,
            avatarUrl: gitRepository.data.owner.avatar_url,
        },
        pushedAt: gitRepository.data.pushed_at,
        forks: gitRepository.data.forks_count,
        stargazers: gitRepository.data.stargazers_count,
        issues: gitRepository.data.open_issues_count,
        languages: Object.keys(languages.data)
            .sort((languageA, languageB) => languages.data[languageB] - languages.data[languageA])
            .splice(0, Object.keys(languages.data).length > 3 ? 3 : Object.keys(languages.data).length),
        contributors: contributors.data.map((contributor) => ({
            name: contributor.login,
            avatarUrl: contributor.avatar_url,
            contributions: contributor.contributions
        })),
        commits: commits.data.map((commit) => ({
            sha: commit.sha,
            message: commit.commit.message,
            createdAt: commit.commit?.author?.date,
            author: commit?.author?.login
        })),
        releases: releases.data.length,
        branches: branches.data.length,
        tags: tags.data.length,
    };
}

export const fetchGitRepositoryComplete = (repository) => axios.all([
    fetchGitRepository(repository),
    fetchLanguages(repository),
    fetchContributors(repository),
    fetchReleases(repository),
    fetchBranches(repository),
    fetchTags(repository),
    fetchCommits(repository)])
    .then(axios.spread((gitRepository, languages, contributors, releases, branches, tags, commits) => {

        const repositoryObject = getAllDataFromRepository(gitRepository, languages, contributors, releases, branches, tags, commits);

        return {
            data: {
                ...repositoryObject
            }
        };
    }));