# ShopEasy Store

## Project Description

ShopEasy Store is a modern and responsive React E-Commerce Store where users can browse products, search for items, view product details, add products to a shopping cart, log in, and access a protected checkout page.

This project was developed to demonstrate practical frontend development skills using React and modern web development concepts.

## Features

- Home page
- Product listing
- Product search
- Product details
- Shopping cart
- Add products to cart
- Remove products from cart
- Automatic cart total
- User login
- Protected checkout
- Controlled login and checkout forms
- Product data fetched from an API
- Loading states
- Error handling
- Nested product routes
- Responsive design

## Technologies Used

- React
- JavaScript
- React Router
- Context API
- HTML
- CSS
- Vite
- Git
- GitHub
- Fake Store API

## Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── SearchFilter.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
├── App.jsx
├── main.jsx
└── index.css

## Application Flow

Home
↓
Products
↓
Product Details
↓
Add to Cart
↓
Cart
↓
Checkout
↓
Login
↓
Protected Checkout

## API

Product information is fetched from:

https://fakestoreapi.com/products

The application uses fetch() and React's useEffect() to load product data.

## React Concepts Demonstrated

### Component-Based Architecture

The application uses reusable components such as:

- Navbar
- ProductCard
- SearchFilter
- ProtectedRoute

### React Router

The application includes:

/
 /products
 /products/:id
 /products/:id/overview
 /products/:id/reviews
 /products/:id/specifications
 /cart
 /checkout
 /login

