const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Route to create a new team
router.post('/create-team', async (req, res) => {
    try {
        const { teamName, captain, players } = req.body;

        const newTeam = new Team({
            teamName,
            captain,
            players
        });

        await newTeam.save();
        res.status(201).json({ message: 'Team created successfully!', team: newTeam });
    } catch (err) {
        res.status(500).json({ message: 'Error creating team', error: err.message });
    }
});

// Route to get all teams
router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teams', error: err.message });
    }
});

// Route to update payment status
router.put('/update-payment/:teamId', async (req, res) => {
    try {
        const { teamId } = req.params;
        const { paymentStatus, prizeAmount } = req.body;

        const updatedTeam = await Team.findByIdAndUpdate(
            teamId,
            { paymentStatus, prizeAmount },
            { new: true }
        );

        res.status(200).json({ message: 'Payment status updated', team: updatedTeam });
    } catch (err) {
        res.status(500).json({ message: 'Error updating payment status', error: err.message });
    }
});

module.exports = router;
