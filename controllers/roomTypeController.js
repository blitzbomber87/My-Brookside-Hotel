const { RoomType } = require("../models");

module.exports = {
    getTypes: async (req, res) => {
        try {
            const roomTypeData = await RoomType.findAll();
            res.json(roomTypeData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
}