# Next Ecommmerce

A full-featured e-commerce web app built with Next.js App Router. It includes client and admin areas, authentication pages, product browsing, cart and checkout, order management, and a role-based admin dashboard.

## What this project demonstrates
- End-to-end e-commerce flow: browse products, add to cart, and place orders
- Authentication screens and guarded layouts for public, client, and admin areas
- Admin tools for products, users, and orders with tables and actions
- Payment integration flow patterns (Stripe/Khalti) on order payment routes
- Global state management with Redux Toolkit and persistence
- App Router layout organization with route groups

## What I learn by building this
- Structure a large Next.js App Router project
- Build reusable UI components and page-level layouts
- Organize role-based sections and protected routes
- Manage global state with Redux Toolkit and Redux Persist
- Handle forms with React Hook Form and validations
- Integrate third-party services (payments, uploads, notifications)
- Design admin dashboards with tables, filters, and actions

## Tech stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Redux Toolkit + Redux Persist
- React Hook Form
- Axios
- Stripe React SDK
- React Toastify

## Project structure (visual)
```
next-new-ecom/
├── public/
│   └── assets/
│       └── images/
├── fonts/
├── src/
│   ├── api/
│   │   ├── auth.js
│   │   ├── index.js
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── users.js
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.js
│   │   ├── page.js
│   │   ├── (auth)/
│   │   │   ├── layout.js
│   │   │   ├── forgot-password/page.js
│   │   │   ├── login/page.js
│   │   │   ├── register/page.js
│   │   │   └── reset-password/page.js
│   │   ├── (client)/
│   │   │   ├── layout.js
│   │   │   ├── (admin)/
│   │   │   │   ├── layout.js
│   │   │   │   ├── order-management/
│   │   │   │   ├── product-management/
│   │   │   │   └── user-management/
│   │   │   ├── dashboard/page.js
│   │   │   └── profile/page.js
│   │   ├── about/page.js
│   │   ├── cart/page.js
│   │   ├── contact/page.js
│   │   ├── orders/
│   │   │   ├── layout.js
│   │   │   ├── page.js
│   │   │   └── [id]/payment/
│   │   └── products/
│   │       ├── layout.js
│   │       ├── loading.js
│   │       ├── page.js
│   │       └── [id]/
│   │           ├── loading.js
│   │           └── page.js
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── HeaderCart.js
│   │   ├── Logo.js
│   │   ├── Modal.js
│   │   ├── NavLink.js
│   │   ├── Spinner.js
│   │   ├── ThemeToggler.js
│   │   ├── User.js
│   │   ├── about/TeamCard.js
│   │   ├── admin/
│   │   │   ├── Sidebar.js
│   │   │   ├── orders/
│   │   │   │   ├── OrderAction.js
│   │   │   │   ├── Status.js
│   │   │   │   ├── Table.js
│   │   │   │   └── TableHead.js
│   │   │   ├── products/
│   │   │   │   ├── DeleteProduct.js
│   │   │   │   ├── form.js
│   │   │   │   ├── Pagination.js
│   │   │   │   └── Table.js
│   │   │   └── users/
│   │   │       ├── Table.js
│   │   │       ├── UserAction.js
│   │   │       ├── UserModal.js
│   │   │       └── UsersTableHead.js
│   │   ├── dashboard/DashboardCard.js
│   │   ├── form/passwordInput.js
│   │   ├── home/
│   │   │   ├── BestSeller.js
│   │   │   ├── ChooseSection.js
│   │   │   ├── ContactSection.js
│   │   │   ├── CTASection.js
│   │   │   ├── HeroSection.js
│   │   │   ├── PopularProducts.js
│   │   │   └── TestimonialsSection.js
│   │   ├── orders/
│   │   │   ├── Card.js
│   │   │   ├── CashOnDelivery.js
│   │   │   ├── payVaiStripe.js
│   │   │   ├── PayViaKhalti.js
│   │   │   └── status.js
│   │   ├── products/
│   │   │   ├── AddToCart.js
│   │   │   ├── Card.js
│   │   │   ├── Filter.js
│   │   │   ├── ProductsBanner.js
│   │   │   ├── TableHeader.js
│   │   │   └── details/
│   │   │       ├── AddToCart.js
│   │   │       ├── Description.js
│   │   │       └── Image.js
│   │   └── profile/Image.js
│   ├── config/
│   │   └── config.js
│   ├── constants/
│   │   ├── navLinks.js
│   │   ├── order.js
│   │   ├── roles.js
│   │   ├── routes.js
│   │   └── Sidebar.js
│   ├── helpers/queryFormatter.js
│   ├── layouts/MainLayout.js
│   └── redux/
│       ├── provider.js
│       ├── rootReducer.js
│       ├── store.js
│       ├── auth/
│       │   ├── authActions.js
│       │   └── authSlice.js
│       ├── cart/cartSlice.js
│       └── userPreferences/userPreferencesSlice.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## Folder guide (what is used where, and why)
- src/app: Next.js App Router pages, layouts, and route groups
- src/app/(auth): authentication pages and shared auth layout
- src/app/(client): client-facing layout and pages
- src/app/(client)/(admin): admin-only dashboards and management pages
- src/components: reusable UI elements and page sections
- src/api: API service layer organized by domain (auth, products, users, orders)
- src/redux: global store, slices, and provider wiring
- src/constants: route names, roles, and sidebar navigation constants
- src/helpers: small utility functions used across features
- src/config: centralized configuration values
- public/assets, src/assets, fonts: static assets and fonts

## Key flows mapped to files
- Auth screens and layout: src/app/(auth)
- Product browsing: src/app/products and src/components/products
- Cart page and add-to-cart: src/app/cart and src/components/products/AddToCart.js
- Orders and payment: src/app/orders and src/components/orders
- Admin management: src/app/(client)/(admin) and src/components/admin
- Global state: src/redux with auth, cart, and preferences slices

## Admin and test credentials
- Admin
   - id: admin@gmail.com
   - pw: admin@123

- Merchant
   - id: merchant@gmail.com
   - pw: merchant@123

- User
   - id: user@gmail.com
   - pw: user@123

## Getting started
1. Install dependencies
   - npm install
2. Run the dev server
   - npm run dev
3. Open in browser
   - http://localhost:3000


## Notes
- Payment components are present for Stripe and Khalti flows; wire environment variables and backend endpoints as needed.
- API calls are organized under src/api. Adjust base URLs in the config as required.

## Backend Repository
This project pairs with a MERN backend. Check out the backend code here: [MERN Ecommerce Backend](https://github.com/MYTHOS-07/MERN_Ecommerce_Backend/tree/main). It includes authentication, product management, order processing, and payment endpoints that integrate with this frontend.
