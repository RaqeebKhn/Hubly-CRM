const Ticket = require('../Models/ticket');
const User = require('../Models/user');

// Helper function to find admin
async function findAdmin() {
    const admin = await User.findOne({ role: 'admin' });
    if (!admin) {
        throw new Error('No admin user found in the system');
    }
    return admin;
}

exports.createTicket = async (req, res) => {
    try {
        const admin = await findAdmin();
        
        const ticket = new Ticket({
            subject: req.body.subject,
            message: req.body.message,
            priority: req.body.priority || 'medium',
            createdBy: req.user._id, // From auth middleware
            assignedTo: admin._id // Auto-assign to admin
        });

        await ticket.save();

        // Populate user details
        const populatedTicket = await ticket.populate([
            { path: 'createdBy', select: 'firstName lastName email' },
            { path: 'assignedTo', select: 'firstName lastName email' }
        ]);

        res.status(201).json({
            success: true,
            message: 'Ticket created successfully',
            ticket: populatedTicket
        });
    } catch (error) {
        console.error('Ticket creation error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error creating ticket'
        });
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
            .populate('createdBy', 'firstName lastName email')
            .populate('assignedTo', 'firstName lastName email')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            tickets
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching tickets'
        });
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                updatedAt: new Date()
            },
            { new: true }
        ).populate(['createdBy', 'assignedTo']);

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: 'Ticket not found'
            });
        }

        res.status(200).json({
            success: true,
            ticket
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating ticket'
        });
    }
};