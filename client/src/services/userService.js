import axiosInstance from "./axiosConfig";

export const userRequest = {

    register: async (userData) => {
        try {
            const response = await axiosInstance.post('/auth/register', userData);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response.status == 400 ) {
                return { error, message: "User already exist"}
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    login: async (userData) => {
        try {
            const response = await axiosInstance.post('/auth/login', userData);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response.status == 401) {
                return { error, message: "Invalid username or password" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    getSportsData: async () => {
        try {
            const response = await axiosInstance.get('/getSports');
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Invalid username or password" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },
}



