const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization;

        const ong = await connection('ongs')
            .where('id', ong_id)
            .select('name')
            .first();

        if (!ong) {
            return res.status(400).json({ error: 'No ONG found with this ID' });
        }

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return res.json(incidents);
    }
}