import { useState } from 'react';
import './Categories.css';

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState('staples');

    const categories = [
        {
            id: 'breads-dairy',
            name: 'Breads, Dairy & Eggs',
            icon: '/dairy_eggs_icon.png',
            subcategories: [
                { name: 'Breads & Bakery', image: '/bread.png' },
                { name: 'Milk', image: '/milk.png' },
                { name: 'Curd', image: null },
                { name: 'Eggs', image: '/eggs.png' },
                { name: 'Cheese', image: '/cheese.png' },
                { name: 'Paneer', image: '/paneer.png' },
                { name: 'Butter', image: null },
                { name: 'Yogurt', image: null }
            ]
        },
        {
            id: 'staples',
            name: 'Staples',
            icon: '/staples_icon.png',
            subcategories: [
                { name: 'Rice', image: '/rice.png' },
                { name: 'Dals', image: '/dals.png' },
                { name: 'Millets & Grains', image: null },
                { name: 'Flours', image: null },
                { name: 'Nuts, Seeds & Mixes', image: null },
                { name: 'Dates & Raisins', image: null },
                { name: 'Salt and Sweeteners', image: null },
                { name: 'Oils', image: null }
            ]
        },
        {
            id: 'kids-nutrition',
            name: 'Kids Food & Nutrition',
            icon: '/kids_nutrition_icon.png',
            subcategories: [
                { name: 'Baby Food', image: null },
                { name: 'Kids Snacks', image: null },
                { name: 'Health Drinks', image: null },
                { name: 'Nutrition Supplements', image: null }
            ]
        },
        {
            id: 'packaged-foods',
            name: 'Packaged Foods',
            icon: '/packaged_foods_icon.png',
            subcategories: [
                { name: 'Tea', image: null },
                { name: 'Coffee', image: null },
                { name: 'Spreads & Dips', image: null },
                { name: 'Pasta, Noodles & Vermicelli', image: null },
                { name: 'Cereals & Breakfast', image: null },
                { name: 'Baking Essentials', image: null }
            ]
        },
        {
            id: 'snacks',
            name: 'Snacks & More',
            icon: '/snacks_icon.png',
            subcategories: [
                { name: 'Munchies & Snacks', image: null },
                { name: 'Chocolates', image: null },
                { name: 'Beverages', image: null },
                { name: 'Biscuits & Cookies', image: null },
                { name: 'Chikki & Date bites', image: null },
                { name: 'Indian Sweets', image: null },
                { name: 'Bars & Bites', image: null }
            ]
        },
        {
            id: 'health-supplements',
            name: 'Health Supplements',
            icon: '/health_supplements_icon.png',
            subcategories: [
                { name: 'Protein Supplements', image: null },
                { name: 'Nutraceuticals', image: null },
                { name: 'Adaptogens', image: null },
                { name: 'Sports Nutrition', image: null },
                { name: 'Female Wellness', image: null }
            ]
        }
    ];

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

    return (
        <section className="categories-section">
            <div className="categories-container">
                {/* Left Sidebar */}
                <aside className="categories-sidebar">
                    <div className="sidebar-header">
                        <h2 className="sidebar-title">All Categories</h2>
                    </div>
                    <nav className="categories-list">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <img src={category.icon} alt={category.name} className="category-item-icon" />
                                <span className="category-item-name">{category.name}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Right Content Panel */}
                <main className="categories-content">
                    {selectedCategoryData && (
                        <>
                            <header className="content-header">
                                <h3 className="content-title">{selectedCategoryData.name.toUpperCase()}</h3>
                            </header>
                            <div className="subcategories-grid">
                                {selectedCategoryData.subcategories.map((sub, index) => (
                                    <div key={index} className="subcategory-item">
                                        <div className="subcategory-image-wrapper">
                                            {sub.image ? (
                                                <img src={sub.image} alt={sub.name} className="subcategory-image" />
                                            ) : (
                                                <div className="subcategory-placeholder">
                                                    <span className="placeholder-text">{sub.name.charAt(0)}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="subcategory-name">{sub.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </main>
            </div>
        </section>
    );
}

export default Categories;
