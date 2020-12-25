const getPhotoData = (
  Photos_data = {
    success: false,
    fetching: false,
    fetched: false,
    response_status: null,
    data: [],
    data_present: false,
  },
  action
) => {
  let new_Photos_data;
  switch (action.type) {
    case "GET_PHOTO_DATA":
      new_Photos_data = {
        ...Photos_data,
        fetching: true,
        fetched: false,
      };
      break;
    case "GET_PHOTO_DATA_FULFILLED":
      const data_present = action.payload.data.length > 0;
      new_Photos_data = {
        ...Photos_data,
        success: true,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        data_present,
        response_status: action.payload.status,
      };
      break;
    case "GET_PHOTO_DATA_FAILED":
      new_Photos_data = {
        success: false,
        fetching: false,
        fetched: false,
        data: [],
        response_status: null,
        data_present: false,
      };
      break;
    default:
      new_Photos_data = Photos_data;
      break;
  }

  return new_Photos_data;
};

export default getPhotoData;
