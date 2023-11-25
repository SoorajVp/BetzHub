import adminInstance from "./axiosConfig/adminInstance";
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

    CreateNewAdmin: async (adminData) => {
        try {
            const response = await adminInstance.post('/admin/createNewAdmin', adminData);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response.status == 400) {
                return { error, message: "Admin already exist" }
            }
             else if (error.response.status == 403){
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                location.reload()
                return { error, message: "Un-authorized request" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    GetAllAdminData: async() => {
        try {
            const response = await adminInstance.get('/admin/adminslist');
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response.status == 400) {
                return { error, message: "Admin already exist" }
            }
            else if (error.response?.status == 403) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                location.reload()
                return { error, message: "Un-authorized request" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    BlockAdmin: async (id) => {
        try {
            const response = await adminInstance.post(`/admin/blockAdmin/${id}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response?.status == 400) {
                return { error, message: "Admin already exist" }
            }
            else if (error.response?.status == 403) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                location.reload()
                return { error, message: "Un-authorized request" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    UnblockAdmin: async (id) => {
        try {
            const response = await adminInstance.post(`/admin/unblockAdmin/${id}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response?.status == 400) {
                return { error, message: "Admin already exist" }
            }
            else if (error.response?.status == 403) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                location.reload()
                return { error, message: "Un-authorized request" }
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    }


    
}