# ProShop

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = your SECRET key
PAYPAL_CLIENT_ID = your paypal client id
```

### Run

```
# Run frontend (:3000) & backend (:5000)
cd frontend
npm start

cd backend
npm run serve
```

```
# Import data
cd backend
npm run data:import

# Destroy data
cd backend
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456
```