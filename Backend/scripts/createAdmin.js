require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Models/user');

async function createAdminUser() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists');
            return;
        }

        
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = new User({
            firstName: 'Admin',
            lastName: 'User',
            email: 'admin@hubly.com',
            password: hashedPassword,
            role: 'admin'
        });

        await admin.save();
        console.log('Admin user created successfully');
    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await mongoose.connection.close();
    }
}

createAdminUser();