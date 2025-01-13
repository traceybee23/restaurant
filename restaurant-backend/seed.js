const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem'); // Adjust path to your schema
require('dotenv').config();

const seedData = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant';
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected to MongoDB');

        // Clear existing data
        await MenuItem.deleteMany();
        console.log('Existing MenuItems cleared!');

        // Seed new data
        const menuItems = [
            { name: 'American', description: '2 Beef sliders with cheese, lettuce, tomato, pickles, and mustard. Served with a side of seasoned fries.', price: 11.99, category: 'Silders', availability: true },
            { name: 'Italian', description: '2 Beef sliders with mozzarella and marinara. Served with a side of seasoned fries.', price: 11.99, category: 'Silders', availability: true },
            { name: 'Texan', description: '2 Beef sliders with chili, melted cheese and corn chips. Served with a side of seasoned fries.', price: 11.99, category: 'Silders', availability: true },
            { name: 'BLTC', description: '2 Chicken sliders with bacon, lettuce, and tomato. Served with a side of seasoned fries.', price: 10.99, category: 'Silders', availability: true },
            { name: 'Buffalo', description: '2 Chicken sliders tossed with buffalo sauce and ranch. Served with a side of seasoned fries.', price: 10.99, category: 'Silders', availability: true },
            { name: 'Chicken Parm', description: '2 Chicken sliders with mozzarella, marinara, and parmesan cheese. Served with a side of seasoned fries.', price: 10.99, category: 'Silders', availability: true },
            { name: 'Smashed', description: 'Beef burger with cheese, lettuce, tomato, pickles, grilled onion, and mustard. Served with a side of seasoned fries.', price: 13.99, category: 'Burgers', availability: true },
            { name: 'Mushroom Swiss', description: 'Beef burger with swiss cheese, mushrooms, and lettuce. Served with a side of seasoned fries.', price: 13.99, category: 'Burgers', availability: true },
            { name: 'Western', description: 'Beef burger with pepper jack cheese, onion rings, and BBQ sauce. Served with a side of seasoned fries.', price: 13.99, category: 'Burgers', availability: true },
            {
                name: 'Bone-In Wings',
                description: 'Delicious bone-in chicken wings with your choice of sauces and dipping sauce. Served with a side of celery and carrots.',
                category: 'Wings',
                price: null, // Base price is determined by variations
                availability: true,
                options: {
                    sizes: [
                        { size: '5pc', price: 9.99 },
                        { size: '10pc', price: 15.99 }
                    ],
                    sauces: [
                        'Buffalo',
                        'BBQ',
                        'Garlic Parm',
                        'Hot Honey',
                        'Sweet Chili',
                        'Cilantro Lime',
                        "Zach's Tropical Habanero",
                        'Hot Lemon Pepper',
                        'Cajun Dry Rub',
                        'Lemon Pepper Dry Rub'
                    ],
                    dippingSauces: ['Ranch', 'Blue Cheese']
                }
            },
            {
                name: 'Boneless Wings',
                description: 'Delicious boneless chicken wings with your choice of sauces and dipping sauce. Served with a side of celery and carrots.',
                category: 'Wings',
                price: null, // Base price is determined by variations
                availability: true,
                options: {
                    sizes: [
                        { size: '5pc', price: 8.99 },
                        { size: '10pc', price: 12.99 }
                    ],
                    sauces: [
                        'Buffalo',
                        'BBQ',
                        'Garlic Parm',
                        'Hot Honey',
                        'Sweet Chili',
                        'Cilantro Lime',
                        "Zach's Tropical Habanero",
                        'Hot Lemon Pepper',
                        'Cajun Dry Rub',
                        'Lemon Pepper Dry Rub'
                    ],
                    dippingSauces: ['Ranch', 'Blue Cheese']
                }
            }
        ];

        await MenuItem.insertMany(menuItems);
        console.log('MenuItems seeded!');

        mongoose.disconnect();
        console.log('Seeding complete!');
    } catch (err) {
        console.error('Error seeding database:', err);
        mongoose.disconnect();
    }
};

seedData();
