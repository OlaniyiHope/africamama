export const products = [
  {
    id: 1,
    name: "Banana Leaf",
    price: 100.00,
    description: "Fresh organic banana leaves",
    category: "Vegetables",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-600x600.jpg",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    price: 45.50,
    description: "Farm fresh organic tomatoes",
    category: "Vegetables",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/vegetables-600x600.jpg",
    inStock: true,
    rating: 4.8
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    price: 75.00,
    description: "Sweet and juicy strawberries",
    category: "Fruits",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/fruits-600x600.jpg",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    price: 12.99,
    description: "Freshly baked whole grain bread",
    category: "Bakery",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/bread-600x600.jpg",
    inStock: true,
    rating: 4.3
  },
  {
    id: 5,
    name: "Organic Carrots",
    price: 35.00,
    description: "Crunchy organic carrots",
    category: "Vegetables",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/carrots-600x600.jpg",
    inStock: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Fresh Apples",
    price: 55.00,
    description: "Crisp and sweet apples",
    category: "Fruits",
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/apples-600x600.jpg",
    inStock: false,
    rating: 4.9
  }
];

// Helper functions to simulate API calls
export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100); // Simulate network delay
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 100);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(p => p.category === category);
      resolve(filtered);
    }, 100);
  });
};

export const searchProducts = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 100);
  });
};