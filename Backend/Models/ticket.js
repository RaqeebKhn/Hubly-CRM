const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        unique: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'resolved', 'closed'],
        default: 'open'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Generate ticket ID before saving
ticketSchema.pre('save', async function(next) {
    if (!this.ticketId) {
        const count = await this.constructor.countDocuments();
        this.ticketId = `TKT-${new Date().getFullYear()}-${(count + 1).toString().padStart(4, '0')}`;
    }
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Ticket', ticketSchema);