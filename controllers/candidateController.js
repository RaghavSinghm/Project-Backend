const Candidate = require('../models/Candidate');
const jwt = require('jsonwebtoken');

exports.addCandidate = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { first_name, last_name, email } = req.body;
    const candidate = new Candidate({ first_name, last_name, email, user_id: decoded.id });
    await candidate.save();
    res.status(201).json({ message: 'Candidate added successfully' });
};

exports.getCandidates = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const candidates = await Candidate.find({ user_id: decoded.id });
    res.json(candidates);
};
