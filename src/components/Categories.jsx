import { useState } from 'react';
import './Categories.css';

// Import generated icons
import staplesIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/staples_icon_1766914815783.png';
import fruitsVegIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/fruits_vegetables_icon_1766914837650.png';
import dairyEggsIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/dairy_eggs_icon_1766914852305.png';
import kidsNutritionIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/kids_nutrition_icon_1766914867666.png';
import packagedFoodsIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/packaged_foods_icon_1766914882398.png';
import healthSupplementsIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/health_supplements_icon_1766915074750.png';
import cleaningIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/cleaning_essentials_icon_1766915093298.png';
import snacksIcon from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/snacks_more_icon_1766915108166.png';

// Import cropped product images
import riceImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/rice_cropped_1766917339872.png';
import dalsImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/dals_cropped_1766917355099.png';
import milkImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/milk_cropped_1766917372356.png';
import breadImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/bread_cropped_1766917392701.png';
import eggsImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/eggs_cropped_1766917408099.png';
import cheeseImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/cheese_cropped_1766917437454.png';
import paneerImg from '/Users/vineethmr/.gemini/antigravity/brain/2794534c-1e3f-4c79-86a0-faa40709e485/paneer_cropped_1766917456441.png';

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState('staples');

    const categories = [
        {
            id: 'breads-dairy',
            name: 'Breads, Dairy & Eggs',
            icon: dairyEggsIcon,
            subcategories: [
                { name: 'Breads & Bakery', image: breadImg },
                { name: 'Milk', image: milkImg },
                { name: 'Curd', image: null },
                { name: 'Eggs', image: eggsImg },
                { name: 'Cheese', image: cheeseImg },
                { name: 'Paneer', image: paneerImg },
                { name: 'Butter', image: null },
                { name: 'Yogurt', image: null }
            ]
        },
        {
            id: 'staples',
            name: 'Staples',
            icon: staplesIcon,
            subcategories: [
                { name: 'Rice', image: riceImg },
                { name: 'Dals', image: dalsImg },
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
            icon: kidsNutritionIcon,
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
            icon: packagedFoodsIcon,
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
            icon: snacksIcon,
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
            icon: healthSupplementsIcon,
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
