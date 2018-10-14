// determined at build time from webpack config
export const BASE_API_URL =
  typeof APIBASE_URL === 'undefined' ? '' : APIBASE_URL;

const BASE = {
  users: `${BASE_API_URL}/users`,
  growls: `${BASE_API_URL}/growls`,
  login: `${BASE_API_URL}/auth/login`,
};

export const GET_USER = {
  URL: BASE.users,
  METHOD: 'GET',
};

export const CREATE_USER = {
  URL: BASE.users,
  METHOD: 'POST',
};

export const UPDATE_USER = {
  URL: BASE.users,
  METHOD: 'PUT',
};

// ----------------

export const LOG_IN = {
  URL: BASE.login,
  METHOD: 'POST',
};

// ----------------

export const GET_GROWLS = {
  URL: BASE.growls,
  METHOD: 'GET',
};

export const CREATE_GROWL = {
  URL: BASE.growls,
  METHOD: 'POST',
};

export const DELETE_GROWL = {
  URL: BASE.growls,
  METHOD: 'DELETE',
};
