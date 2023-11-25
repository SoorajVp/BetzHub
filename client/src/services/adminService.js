import userInstance from "./axiosConfig/userInstance";

export const adminRequest = {

    SuperAdminLogin: async (adminData) => {
        try {
            const response = await userInstance.post('/auth/super-admin/login', adminData);
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

}