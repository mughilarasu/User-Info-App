const getUserData = (
  User_data = {
    success: false,
    fetching: false,
    fetched: false,
    response_status: null,
    data: [],
    data_present: false,
  },
  action
) => {
  let new_User_data;
  switch (action.type) {
    case "GET_USER_DATA":
      new_User_data = {
        ...User_data,
        fetching: true,
        fetched: false,
      };
      break;
    case "GET_USER_DATA_FULFILLED":
      const data_present = action.payload.data.length > 0;
      new_User_data = {
        ...User_data,
        success: true,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        data_present,
        response_status: action.payload.status,
      };
      break;
    case "GET_USER_DATA_FAILED":
      new_User_data = {
        success: false,
        fetching: false,
        fetched: false,
        data: [],
        response_status: null,
        data_present: false,
      };
      break;
    default:
      new_User_data = User_data;
      break;
  }

  return new_User_data;
};

export default getUserData;
