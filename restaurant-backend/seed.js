const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem'); // Adjust path to your schema
const { options } = require('./routes');
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
            {
                name: 'American',
                description: '2 Beef sliders with cheese, lettuce, tomato, pickles, and mustard. Served with a side of seasoned fries.',
                price: 11.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Italian',
                description: '2 Beef sliders with mozzarella and marinara. Served with a side of seasoned fries.',
                price: 11.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Texan',
                description: '2 Beef sliders with chili, melted cheese and corn chips. Served with a side of seasoned fries.',
                price: 11.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'BLTC',
                description: '2 Chicken sliders with bacon, lettuce, and tomato. Served with a side of seasoned fries.',
                price: 10.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Buffalo',
                description: '2 Chicken sliders tossed with buffalo sauce and ranch. Served with a side of seasoned fries.',
                price: 10.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Chicken Parm',
                description: '2 Chicken sliders with mozzarella, marinara, and parmesan cheese. Served with a side of seasoned fries.',
                price: 10.99,
                category: 'Silders',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Smashed',
                description: 'Beef burger with cheese, lettuce, tomato, pickles, grilled onion, and mustard. Served with a side of seasoned fries.',
                price: 13.99,
                category: 'Burgers',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Mushroom Swiss',
                description: 'Beef burger with swiss cheese, mushrooms, and lettuce. Served with a side of seasoned fries.',
                price: 13.99,
                category: 'Burgers',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Western',
                description: 'Beef burger with pepper jack cheese, onion rings, and BBQ sauce. Served with a side of seasoned fries.',
                price: 13.99,
                category: 'Burgers',
                availability: true,
                options: {
                    dippingSauces: ['Ketchup']
                }
            },
            {
                name: 'Bone-In Wings',
                description: 'Delicious bone-in chicken wings with your choice of sauces and dipping sauce. Served with a side of celery and carrots.',
                category: 'Chicken',
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
                category: 'Chicken',
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
            },
            {
                name: "Chicken Tenders",
                description: "Crispy golden chicken tenders served with a side of seasoned fries.",
                category: "Chicken",
                price: 9.99,
                availability: true,
                options: {
                    dippingSauces: ['Ketchup', 'Ranch', 'Blue Cheese']
                }
            },
            {
                name: "Fish Tacos with Tortilla Chips",
                description: "Crispy battered fish topped with fresh slaw, pico de gallo, and a zesty sauce, served on soft corn tortillas with a side of tortilla chips.",
                category: "Tacos",
                price: 12.99,
                availability: true
            },
            {
                name: "Chicken Club Tacos with Tortilla Chips",
                description: "Grilled chicken, bacon, lettuce, tomato, and shredded cheese wrapped in soft flour tortillas, served with a side of tortilla chips.",
                category: "Tacos",
                price: 12.99,
                availability: true
            },
            {
                name: "Fried Mushrooms",
                description: "Crispy battered mushrooms, deep-fried to golden perfection.",
                category: "Snacks",
                price: 5.99,
                availability: true,
                options: {
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Fried Pickles",
                description: "Crispy, tangy dill pickle slices battered and fried.",
                category: "Snacks",
                price: 5.99,
                availability: true,
                options: {
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Fried Zucchini",
                description: "Lightly battered zucchini slices fried until crispy.",
                category: "Snacks",
                price: 5.99,
                availability: true,
                options: {
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Mini Corndogs",
                description: "Bite-sized corn dogs, crispy on the outside and juicy on the inside.",
                category: "Snacks",
                price: 7.99,
                availability: true,
                options: {
                    dippingSauces: ['Ketchup', 'Ranch', 'Blue Cheese'],
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Mozzarella Sticks",
                description: "Crispy breaded mozzarella cheese sticks served with marinara sauce.",
                category: "Snacks",
                price: 4.99,
                availability: true,
                options: {
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Onion Rings",
                description: "Crispy, golden-battered onion rings.",
                category: "Snacks",
                price: 4.99,
                availability: true,
                options: {
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Seasoned Fries",
                description: "Crispy golden fries seasoned to perfection.",
                category: "Snacks",
                price: 4.99,
                availability: true,
                options: {
                    dippingSauces: ['Ketchup', 'Ranch', 'Blue Cheese'],
                    sauceToss: { available: true, price: 1.50 }
                }
            },
            {
                name: "Loaded Fries",
                description: "Seasoned fries topped with melted cheese, bacon bits, and green onions.",
                category: "Snacks",
                price: 5.99,
                availability: true
            },
            {
                name: "Pizza Fries",
                description: "Crispy fries topped with marinara sauce, mozzarella, and pepperoni.",
                category: "Snacks",
                price: 6.99,
                availability: true
            },
            {
                name: "Nachos",
                description: "Crispy tortilla chips loaded with cheese, jalapeños, and salsa.",
                category: "Snacks",
                price: 4.99,
                availability: true,
                options: {
                    addProtein: [
                        { name: "Beef", price: 2.99 },
                        { name: "Chicken", price: 2.99 }
                    ]
                }
            },
            {
                name: "Garden Salad",
                description: "A fresh blend of lettuce, tomatoes, cucumbers, and shredded cheese.",
                category: "Snacks",
                price: 5.99,
                availability: true,
                options: {
                    addProtein: [
                        { name: "Chicken", price: 2.99 }
                    ]
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
