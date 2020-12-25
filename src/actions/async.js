import axios from "axios";

export function getUser() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: "GET_USER_DATA",
        });
        const payload_data = {
          status: response.status,
          data: response.data,
        };

        dispatch({
          type: "GET_USER_DATA_FULFILLED",
          payload: payload_data,
        });
      })
      .catch((error) => {
        let status = null;
        let data = null;
        if (!error.response) {
          status = 500;
          data = "No response from server";
        } else {
          status = error.response.status;
          data = error.response.data;
        }
        dispatch({
          type: "GET_USER_DATA_FAILED",
          payload: { status, data },
        });
      });
  };
}

export function getPost() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({
          type: "GET_POST_DATA",
        });
        const payload_data = {
          status: response.status,
          data: response.data.slice(0, 10),
        };
        dispatch({
          type: "GET_POST_DATA_FULFILLED",
          payload: payload_data,
        });
      })
      .catch((error) => {
        let status = null;
        let data = null;
        if (!error.response) {
          status = 500;
          data = "No response from server";
        } else {
          status = error.response.status;
          data = error.response.data;
        }
        dispatch({
          type: "GET_POST_DATA_FAILED",
          payload: { status, data },
        });
      });
  };
}

export function getPhotos() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        dispatch({
          type: "GET_PHOTO_DATA",
        });
        const payload_data = {
          status: response.status,
          data: response.data.slice(0, 10),
        };
        dispatch({
          type: "GET_PHOTO_DATA_FULFILLED",
          payload: payload_data,
        });
      })
      .catch((error) => {
        let status = null;
        let data = null;
        if (!error.response) {
          status = 500;
          data = "No response from server";
        } else {
          status = error.response.status;
          data = error.response.data;
        }
        dispatch({
          type: "GET_PHOTO_DATA_FAILED",
          payload: { status, data },
        });
      });
  };
}
