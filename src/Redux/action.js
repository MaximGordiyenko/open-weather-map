export const getStarted = () => ({
  type: "GET_STARTED"
});

export const getSuccess = todo => ({
  type: "GET_SUCCESS",
  payload: {
    ...todo
  }
});

export const getFailure = error => ({
  type: "GET_FAILURE",
  payload: {
    error
  }
});
