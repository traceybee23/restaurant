# restaurant
Menu &amp; Restaurant Ordering
![Restaurant](https://github.com/user-attachments/assets/36024cbe-5058-49d5-8413-6d09f099486d)

# Restaurant API Documentation

This API serves as the backend for the restaurant application, handling menu items, orders, and admin user management.

## Base URL
- Local: `http://localhost:3000/api`

---

## Endpoints

### Menu Items
- **GET** `/menu-items`
  - **Description:** Retrieve all menu items.
  - **Response:** Array of menu items.

- **POST** `/menu-items`
  - **Description:** Add a new menu item (Admin only).
  - **Body:**
    ```json
    {
      "name": "Pizza Margherita",
      "description": "Classic pizza with mozzarella and basil",
      "price": 9.99,
      "category": "Pizza",
      "image": "http://example.com/image.jpg",
      "availability": true
    }
    ```
  - **Response:** Created menu item.

- **PUT** `/menu-items/:id`
  - **Description:** Update an existing menu item by ID (Admin only).
  - **Body:**
    ```json
    {
      "name": "Pizza Margherita Deluxe",
      "price": 11.99
    }
    ```
  - **Response:** Updated menu item.

- **DELETE** `/menu-items/:id`
  - **Description:** Delete a menu item by ID (Admin only).
  - **Response:** Deleted menu item.

---

### Orders
- **GET** `/orders`
  - **Description:** Retrieve all orders.
  - **Response:** Array of orders.

- **POST** `/orders`
  - **Description:** Create a new order.
  - **Body:**
    ```json
    {
      "customerName": "John Doe",
      "customerPhone": "1234567890",
      "customerEmail": "john.doe@example.com",
      "items": [
        {
          "menuItem": "64abcde1234567890f123456",
          "quantity": 2
        },
        {
          "menuItem": "64abcde1234567890f123457",
          "quantity": 1
        }
      ],
      "totalPrice": 29.97
    }
    ```
  - **Response:** Created order.

- **PUT** `/orders/:id`
  - **Description:** Update an order by ID (Admin only).
  - **Body:**
    ```json
    {
      "status": "Completed"
    }
    ```
  - **Response:** Updated order.

- **DELETE** `/orders/:id`
  - **Description:** Delete an order by ID (Admin only).
  - **Response:** Deleted order.

---

### Admin Users
- **POST** `/admin-users/login`
  - **Description:** Admin login.
  - **Body:**
    ```json
    {
      "username": "admin",
      "password": "password123"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Login successful",
      "token": "jwt-token"
    }
    ```

---

## Authorization
- **Admin-only routes** require a valid **JWT token** in the request header:
  - **Header:**
    ```
    Authorization: Bearer <jwt-token>
    ```

---

## Error Handling
If an error occurs, the API will return:
```json
{
  "message": "Error description",
  "error": "Detailed error stack (not included in production)"
}
