import apiInstance from './instance';

const getRegistrationFields = async () => {
  const response = await apiInstance.get('/api/player/fields/validations', {
    params: { scenario: 'registration' },
  });
  return response.data;
};

const registerUser = async registrationFormData => {
  const response = await apiInstance.post(
    '/api/player/register',
    registrationFormData,
  );
  return response.data;
};

const getUserGeo = async () => {
  const response = await apiInstance.get('/api/player/init');
  return response.data;
};

const getCountries = async () => {
  const response = await apiInstance.get('/api/settings/countries');
  return response.data;
};

const getCurrencies = async () => {
  const response = await apiInstance.get('/api/settings/currencies');
  return response.data;
};

const getLocales = async () => {
  const response = await apiInstance.get('/api/settings/locales');
  return response.data;
};

export {
  getRegistrationFields,
  registerUser,
  getUserGeo,
  getCountries,
  getCurrencies,
  getLocales,
};
