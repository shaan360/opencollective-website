export const GET_REPOS_FROM_GITHUB_REQUEST = 'GET_REPOS_FROM_GITHUB_REQUEST';
export const GET_REPOS_FROM_GITHUB_SUCCESS = 'GET_REPOS_FROM_GITHUB_SUCCESS';
export const GET_REPOS_FROM_GITHUB_FAILURE = 'GET_REPOS_FROM_GITHUB_FAILURE';

export const GET_CONTRIBUTORS_FROM_GITHUB_REQUEST = 'GET_CONTRIBUTORS_FROM_GITHUB_REQUEST';
export const GET_CONTRIBUTORS_FROM_GITHUB_SUCCESS = 'GET_CONTRIBUTORS_FROM_GITHUB_SUCCESS';
export const GET_CONTRIBUTORS_FROM_GITHUB_FAILURE = 'GET_CONTRIBUTORS_FROM_GITHUB_FAILURE';

export var MIN_STARS_FOR_ONBOARDING = 100;

// Setting to 0 for development testing purposes
if (!(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging')) {
	MIN_STARS_FOR_ONBOARDING = 0;
}
