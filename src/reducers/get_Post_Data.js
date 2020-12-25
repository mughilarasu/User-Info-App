const getPostData = (
  Post_data = {
    success: false,
    fetching: false,
    fetched: false,
    response_status: null,
    data: [],
    data_present: false,
  },
  action
) => {
  let new_Post_data;
  switch (action.type) {
    case "GET_POST_DATA":
      new_Post_data = {
        ...Post_data,
        fetching: true,
        fetched: false,
      };
      break;
    case "GET_POST_DATA_FULFILLED":
      const data_present = action.payload.data.length > 0;
      new_Post_data = {
        ...Post_data,
        success: true,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        data_present,
        response_status: action.payload.status,
      };
      break;
    case "GET_POST_DATA_FAILED":
      new_Post_data = {
        success: false,
        fetching: false,
        fetched: false,
        data: [],
        response_status: null,
        data_present: false,
      };
      break;
    default:
      new_Post_data = Post_data;
      break;
  }

  return new_Post_data;
};

export default getPostData;
