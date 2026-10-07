# QuickShop

QuickShop is a multi-user e-commerce platform. Users can purchase products from the shop, and can also become sellers to list and sell their own products.

## Project Overview

- Users can register/login to browse and buy products.
- Any user can become a seller and add, edit, and delete their own products.
- Sellers can manage their products through a separate dashboard.
- Available products can be viewed and purchased on the shop page.
- The frontend is built with React and Vite, along with a backend API, for authentication and product management.

## Setup

### Requirements

- Node.js 18+
- QuickShop server running on `http://localhost:3000`

### Run the client

```bash
cd client
npm install
npm run dev
```

In development, the API defaults to the same hostname as the client on port
`3000`. To test from a phone, connect the phone and computer to the same
network, find the computer's local IPv4 address, and open
`http://<computer-ip>:5173` on the phone (for example,
`http://192.168.1.20:5173`). Allow Node.js through the computer's firewall on
the private network if prompted. The API URL then uses that same computer IP.

To use a different API origin, copy `.env.example` to `.env` and set
`VITE_API_BASE_URL` to the API origin without `/api` (for example,
`https://api.example.com`). A trailing slash is removed automatically. In
production, set this to the deployed backend origin; when it is unset,
requests use the same-origin `/api` path.

## Available API Endpoints

### Authentication

| Method | Endpoint              | Description                       |
| ------ | --------------------- | --------------------------------- |
| `POST` | `/auth/register`      | Register a new user               |
| `POST` | `/auth/login`         | Log in a user                     |
| `POST` | `/auth/refresh-token` | Refresh the access token          |
| `POST` | `/auth/logout`        | Log out the current user          |
| `GET`  | `/auth/me`            | Get details of the logged-in user |

### Products

| Method   | Endpoint       | Description                            |
| -------- | -------------- | -------------------------------------- |
| `POST`   | `/product`     | Create a new product _(authenticated)_ |
| `GET`    | `/product`     | Get all products                       |
| `GET`    | `/product/:id` | Get details of a single product        |
| `PUT`    | `/product/:id` | Update your product _(authenticated)_  |
| `DELETE` | `/product/:id` | Delete your product _(authenticated)_  |

A valid authentication token/cookie is required for protected endpoints.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
```
