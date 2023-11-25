const { getAllUsers, BlockUser, UnblockUser } = require("../controller/PartnerAdminController")
const { adminVerification } = require("../middlewares/authMiddleware")

module.exports = (app) => {
    
    app.get("/admin/userList", adminVerification, getAllUsers);

    app.post("/admin/blockUser/:id", adminVerification, BlockUser)

    app.post("/admin/unblockUser/:id", adminVerification, UnblockUser)

}