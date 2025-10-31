Routes are defined in AppRoutes.jsx, including a healthcheck component served at ENV.HEALTHCHECK_PATH.

Note: API calls use the client wrapper which auto-falls back to the mock server when no backend URL is configured or when healthcheck fails.
