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
            } else if (error.response.status == 406) {
                return { error, message: "Account action blocked" }
            }else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    partnerAdminLogin: async (adminData) => {
        try {
            const response = await userInstance.post('/auth/partner-admin/login', adminData);
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

    adminLogin: async (adminData) => {
        try {
            const response = await userInstance.post('/auth/admin/login', adminData);
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
            } else if (error.response.status == 403 || error.response.status == 406){
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    CreateNewUser: async (userData) => {
        try {
            const response = await adminInstance.post('/admin/createNewUser', userData);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response.status == 400) {
                return { error, message: "Admin already exist" }
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
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
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    GetAllUserData: async () => {
        try {
            const response = await adminInstance.get('/admin/userList');
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response.status == 400) {
                return { error, message: "Admin already exist" }
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    GetPAUserData: async () => {
        try {
            const response = await adminInstance.get('/admin/pa-userList');
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response.status == 400) {
                return { error, message: "Admin already exist" }
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
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
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
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
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    BlockUser: async (id) => {
        try {
            const response = await adminInstance.post(`/admin/blockUser/${id}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response?.status == 400) {
                return { error, message: "Admin already exist" }
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    },

    UnblockUser: async (id) => {
        try {
            const response = await adminInstance.post(`/admin/unblockUser/${id}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            if (error.response?.status == 401) {
                return { error, message: "Un-authorized request" }
            } else if (error.response?.status == 400) {
                return { error, message: "Admin already exist" }
            } else if (error.response.status == 403 || error.response.status == 406) {
                localStorage.removeItem("betzhubAdminToken")
                localStorage.removeItem("betzhubAdmin")
                alert("Account action blocked")
                location.reload()
            } else {
                return { error, message: "Something went wrong" }
            }
        }
    }


    
}