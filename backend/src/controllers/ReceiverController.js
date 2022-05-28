const Receiver = require('../models/Receiver.js')

module.exports = {
    async save(req, res) {
        const { latitude } = req.body;
        const { longitude } = req.body;
        const { coverage } = req.body;

        let receiver = await Receiver.findOne({ latitude, longitude, coverage });

        if (!receiver) {
            receiver = await Receiver.create({ latitude, longitude, coverage });
        }

        return res.json(receiver);   
    },

    async index(req, res) {
       const receivers = await Receiver.find({});
       return res.json(receivers);
    }
}