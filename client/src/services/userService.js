import userInstance from "./axiosConfig/userInstance";

export const userRequest = {

    register: async (userData) => {
        try {
            const response = await userInstance.post('/auth/register', userData);
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
            const response = await userInstance.post('/auth/login', userData);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response.status == 401) {
                return { error, message: "Invalid username or password" }
            } else if (error.response.status == 406) {
                return { error, message: "Account action blocked" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    getSportsData: async () => {
        try {
            const response = await userInstance.get('/getSports');
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



