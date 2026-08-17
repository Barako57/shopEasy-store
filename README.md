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

### Context API

Context API manages global state such as:

- Shopping cart items
- User login status

### Controlled Components

The login and checkout forms use controlled React inputs and validate empty fields before submission.

### Protected Routes

The checkout page is protected. Users who are not logged in are redirected to the login page.

### Data Fetching

Product information is loaded using:

- fetch()
- useEffect()
- Loading states
- Error states

## Responsive Design

ShopEasy Store is designed to work across:

- Desktop
- Mobile
- Tablet

## Getting Started

### 1. Clone the repository

git clone https://github.com/YOUR-USERNAME/shopEasy-store.git

### 2. Enter the project

cd shopEasy-store

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

##Future Improvements

- Online payment integration
- User registration
- Real authentication
- Persistent login
- Product categories
- Advanced filters
- Product quantity management
- Order history
- Backend database
- Admin dashboard
- Cloud deployment

## 🌍 Deployment

The project can be deployed using:

- Vercel
- Netlify
- GitHub Pages

## 👨‍💻 Author

baharez

Frontend Developer | React Learner

## 📄 License

This project was created for educational and learning purposes
