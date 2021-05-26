import axios from "axios";
const userQueries = {
  isUserExist : async (phoneNumer) => {
    // mocking backend call
    const response = {
      status: "success",
      message: "NOT_FOUND",
      payload: "",
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(response.status!=="failed"),3000);
    })
  },

};
export default userQueries;
