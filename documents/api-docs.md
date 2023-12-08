# API DOCUMENTATION <img src="https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg" width="100" align="right">

Welcome to the API documentation for the *`AllMedia`* project. This document provides a comprehensive guide to the API endpoints and how to interact with them. Please follow the guidelines below to make the most of this documentation.

![Docker Image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230630120346/What-is-REST-API.png)

## Base URL

The base URL for all API endpoints is: http://localhost:3000 (or the URL you specified during installation).

## Authentication

This API requires user authentication via JSON Web Tokens (JWT). To access protected routes, include the JWT token in the Authorization header as follows:

```plaintext
Authorization: Bearer YOUR_JWT_TOKEN
```

## How to Use the API

To interact with the API, append endpoints to the base URL. Here are key examples:

- To access version 1 of the API: **`/api/v1`**

- To access a specific endpoint: **`/api/v1/endpoint`**


### Example

For instance, assuming the base URL is [http://localhost:3000](http://localhost:3000), the process of accessing the user-related endpoint can be illustrated as follows:

- **Example**: **_`Base URL`/API/Endpoint_**
- **Final URL**: **`http://localhost:3000/api/v1/endpoint`**

**Note :** For a comprehensive list of available endpoints and their functionalities, please navigate to: _**[API ENDPOINTS](#api-endpoints)**_

## API Endpoints

**This structure simplifies navigation through the API and ensures clarity when constructing URLs for specific functionalities.**

> [http://localhost:3000/api/v1/endpoint](http://localhost:3000)

You can seamlessly switch the example endpoint for various functionalities:

- To access products: **`/api/v1/products`**
- To interact with orders: **`/api/v1/orders`**

**Note :** Explore further by switching the **`endpoint`** for different functionalities.

### Users

| Endpoint       | HTTP Method | Description         | Request Body                    | Response                 | Access Control           |
| -------------- | ----------- | ------------------- | ------------------------------- | ------------------------ | ------------------------ |
| `/users`       | POST        | Add a new user      | User object                     | Newly created user       | Public                   |
| `/users`       | DELETE      | Delete a user       | User ID                         | Confirmation of deletion | Authenticated users only |
| `/users`       | PATCH       | Update a user       | User object with updated fields | Updated user             | Authenticated users only |
| `/users/:id`   | GET         | Get a user by ID    | N/A                             | User object              | Public                   |
| `/users/login` | POST        | Get a user by email | User email                      | User object              | Public                   |

### Brands

| Endpoint      | HTTP Method | Description       | Request Body                     | Response                 | Access Control |
| ------------- | ----------- | ----------------- | -------------------------------- | ------------------------ | -------------- |
| `/brands`     | GET         | Get all brands    | N/A                              | Array of all brands      | Public         |
| `/brands`     | POST        | Add a new brand   | Brand object                     | Newly created brand      | Manager only   |
| `/brands`     | DELETE      | Delete a brand    | Brand ID                         | Confirmation of deletion | Manager only   |
| `/brands`     | PATCH       | Update a brand    | Brand object with updated fields | Updated brand            | Manager only   |
| `/brands/:id` | GET         | Get a brand by ID | N/A                              | Brand object             | Public         |

## Categories

| Endpoint          | HTTP Method | Description          | Request Body                        | Response                 | Access Control |
| ----------------- | ----------- | -------------------- | ----------------------------------- | ------------------------ | -------------- |
| `/categories`     | GET         | Get all categories   | N/A                                 | Array of all categories  | Public         |
| `/categories`     | POST        | Add a new category   | Category object                     | Newly created category   | Manager only   |
| `/categories`     | DELETE      | Delete a category    | Category ID                         | Confirmation of deletion | Manager only   |
| `/categories`     | PATCH       | Update a category    | Category object with updated fields | Updated category         | Manager only   |
| `/categories/:id` | GET         | Get a category by ID | N/A                                 | Category object          | Public         |

### Cities

| Endpoint      | HTTP Method | Description      | Request Body                    | Response                 | Access Control |
| ------------- | ----------- | ---------------- | ------------------------------- | ------------------------ | -------------- |
| `/cities`     | GET         | Get all cities   | N/A                             | Array of all cities      | Public         |
| `/cities`     | POST        | Add a new city   | City object                     | Newly created city       | Manager only   |
| `/cities`     | DELETE      | Delete a city    | City ID                         | Confirmation of deletion | Manager only   |
| `/cities`     | PATCH       | Update a city    | City object with updated fields | Updated city             | Manager only   |
| `/cities/:id` | GET         | Get a city by ID | N/A                             | City object              | Public         |

### Contact

| Endpoint              | HTTP Method | Description                 | Request Body                       | Response                 | Access Control           |
| --------------------- | ----------- | --------------------------- | ---------------------------------- | ------------------------ | ------------------------ |
| `/contacts`           | POST        | Add a new contact           | Contact object                     | Newly created contact    | Public                   |
| `/contacts`           | DELETE      | Delete a contact            | Contact ID                         | Confirmation of deletion | Authenticated users only |
| `/contacts`           | PATCH       | Update a contact            | Contact object with updated fields | Updated contact          | Authenticated users only |
| `/contacts/:idOrName` | GET         | Get a contact by ID or name | N/A                                | Contact object           | Public                   |

### Cuisines

| Endpoint        | HTTP Method | Description         | Request Body                       | Response                 | Access Control |
| --------------- | ----------- | ------------------- | ---------------------------------- | ------------------------ | -------------- |
| `/cuisines`     | GET         | Get all cuisines    | N/A                                | Array of all cuisines    | Public         |
| `/cuisines`     | POST        | Add a new cuisine   | Cuisine object                     | Newly created cuisine    | Manager only   |
| `/cuisines`     | DELETE      | Delete a cuisine    | Cuisine ID                         | Confirmation of deletion | Manager only   |
| `/cuisines`     | PATCH       | Update a cuisine    | Cuisine object with updated fields | Updated cuisine          | Manager only   |
| `/cuisines/:id` | GET         | Get a cuisine by ID | N/A                                | Cuisine object           | Public         |

### Delivery Person

| Endpoint              | HTTP Method | Description                 | Request Body                               | Response                      | Access Control |
| --------------------- | ----------- | --------------------------- | ------------------------------------------ | ----------------------------- | -------------- |
| `/deliveryperson`     | GET         | Get all delivery persons    | N/A                                        | Array of all delivery persons | Public         |
| `/deliveryperson`     | POST        | Add a new delivery person   | Delivery person object                     | Newly created delivery person | Manager only   |
| `/deliveryperson`     | DELETE      | Delete a delivery person    | Delivery person ID                         | Confirmation of deletion      | Manager only   |
| `/deliveryperson`     | PATCH       | Update a delivery person    | Delivery person object with updated fields | Updated delivery person       | Manager only   |
| `/deliveryperson/:id` | GET         | Get a delivery person by ID | N/A                                        | Delivery person object        | Public         |

### Order Details

| Endpoint            | HTTP Method | Description             | Request Body         | Response                    | Access Control           |
| ------------------- | ----------- | ----------------------- | -------------------- | --------------------------- | ------------------------ |
| `/orderdetails`     | POST        | Add new order details   | Order details object | Newly created order details | Authenticated users only |
| `/orderdetails`     | DELETE      | Delete order details    | Order details ID     | Confirmation of deletion    | Authenticated users only |
| `/orderdetails/:id` | GET         | Get order details by ID | N/A                  | Order details object        | Public                   |

### Items

| Endpoint     | HTTP Method | Description                                         | Request Body                    | Response                 | Access Control |
| ------------ | ----------- | --------------------------------------------------- | ------------------------------- | ------------------------ | -------------- |
| `/items`     | GET         | Get all items, with caching implemented using Redis | N/A                             | Array of all items       | Public         |
| `/items`     | POST        | Add a new item                                      | Item object                     | Newly created item       | Manager only   |
| `/items`     | DELETE      | Delete an item                                      | Item ID                         | Confirmation of deletion | Manager only   |
| `/items`     | PATCH       | Update an item                                      | Item object with updated fields | Updated item             | Manager only   |
| `/items/:id` | GET         | Get an item by ID                                   | N/A                             | Item object              | Public         |

### Menu

| Endpoint    | HTTP Method | Description      | Request Body                    | Response                 | Access Control |
| ----------- | ----------- | ---------------- | ------------------------------- | ------------------------ | -------------- |
| `/menu`     | GET         | Get all menus    | N/A                             | Array of all menus       | Public         |
| `/menu`     | POST        | Add a new menu   | Menu object                     | Newly created menu       | Manager only   |
| `/menu`     | DELETE      | Delete a menu    | Menu ID                         | Confirmation of deletion | Manager only   |
| `/menu`     | PATCH       | Update a menu    | Menu object with updated fields | Updated menu             | Manager only   |
| `/menu/:id` | GET         | Get a menu by ID | N/A                             | Menu object              | Public         |

### Orders

| Endpoint           | HTTP Method | Description                                | Request Body                     | Response                           | Access Control           |
| ------------------ | ----------- | ------------------------------------------ | -------------------------------- | ---------------------------------- | ------------------------ |
| `/orders`          | GET         | Get all orders                             | N/A                              | Array of all orders                | Public                   |
| `/orders`          | POST        | Add a new order                            | Order object                     | Newly created order                | Authenticated users only |
| `/orders`          | DELETE      | Delete an order                            | Order ID                         | Confirmation of deletion           | Authenticated users only |
| `/orders`          | PATCH       | Update an order                            | Order object with updated fields | Updated order                      | Authenticated users only |
| `/orders/confirm`  | GET         | Get all confirmed orders                   | N/A                              | Array of confirmed orders          | Public                   |
| `/orders/confirm`  | PATCH       | Update delivery status of confirmed orders | Order ID and new delivery status | Updated order                      | Authenticated users only |
| `/orders/delivery` | GET         | Get all orders taken for delivery          | N/A                              | Array of orders taken for delivery | Public                   |
| `/orders/:id`      | GET         | Get an order by ID                         | N/A                              | Order object                       | Public                   |

### Products

| Endpoint        | HTTP Method | Description         | Request Body                       | Response                 | Access Control           |
| --------------- | ----------- | ------------------- | ---------------------------------- | ------------------------ | ------------------------ |
| `/products`     | POST        | Add a new product   | Product object                     | Newly created product    | Authenticated users only |
| `/products`     | DELETE      | Delete a product    | Product ID                         | Confirmation of deletion | Authenticated users only |
| `/products`     | PUT         | Update a product    | Product object with updated fields | Updated product          | Authenticated users only |
| `/products/:id` | GET         | Get a product by ID | N/A                                | Product object           | Public                   |

### Restaurant

| Endpoint              | HTTP Method | Description              | Request Body                          | Response                 | Access Control |
| --------------------- | ----------- | ------------------------ | ------------------------------------- | ------------------------ | -------------- |
| `/restaurants`        | GET         | Get all restaurants      | N/A                                   | Array of all restaurants | Public         |
| `/restaurants`        | POST        | Add a new restaurant     | Restaurant object                     | Newly created restaurant | Manager only   |
| `/restaurants`        | DELETE      | Delete a restaurant      | Restaurant ID                         | Confirmation of deletion | Manager only   |
| `/restaurants`        | PATCH       | Update a restaurant      | Restaurant object with updated fields | Updated restaurant       | Manager only   |
| `/restaurants/:slug`  | GET         | Get a restaurant by slug | N/A                                   | Restaurant object        | Public         |
| `/restaurants/search` | POST        | Filter restaurants       | Filter criteria                       | Array of restaurants     | Public         |

### Roles

| Endpoint | HTTP Method | Description    | Request Body | Response           | Access Control |
| -------- | ----------- | -------------- | ------------ | ------------------ | -------------- |
| `/roles` | POST        | Add a new role | Role object  | Newly created role | Manager only   |

### Tags

| Endpoint    | HTTP Method | Description     | Request Body                   | Response                 | Access Control |
| ----------- | ----------- | --------------- | ------------------------------ | ------------------------ | -------------- |
| `/tags`     | GET         | Get all tags    | N/A                            | Array of all tags        | Public         |
| `/tags`     | POST        | Add a new tag   | Tag object                     | Newly created tag        | Manager only   |
| `/tags`     | DELETE      | Delete a tag    | Tag ID                         | Confirmation of deletion | Manager only   |
| `/tags`     | PATCH       | Update a tag    | Tag object with updated fields | Updated tag              | Manager only   |
| `/tags/:id` | GET         | Get a tag by ID | N/A                            | Tag object               | Public         |

### Test image

| Endpoint       | HTTP Method | Description                                                      | Request Body                                | Response        | Access Control |
| -------------- | ----------- | ---------------------------------------------------------------- | ------------------------------------------- | --------------- | -------------- |
| `/testimg`     | POST        | Upload a single image to AWS S3                                  | Multipart form data with field name "image" | AWS S3 response | Public         |
| `/testimg`     | DELETE      | Delete an image (controller not implemented in provided code)    | N/A                                         | N/A             | N/A            |
| `/testimg`     | PATCH       | Update an image (controller not implemented in provided code)    | N/A                                         | N/A             | N/A            |
| `/testimg/:id` | GET         | Get an image by ID (controller not implemented in provided code) | N/A                                         | N/A             | Public         |

## Error Handling

- This API handles errors and provides appropriate error messages in JSON format. Please refer to the API documentation for specific error responses for each endpoint.

## Testing

- For testing purposes, you can use the provided test cases and use tools like Postman or cURL to interact with the API endpoints.

<br>

> For any questions or issues related to this API, please [contact the project maintainers](mailto:yhammani.dev@gmail.com).
