![Schema Diagram](assets/images/backend-challenge.jpg)

# API Documentation

## Base URL

**http://localhost:5001**

---

## Endpoints

### **Products API**

#### Create a Product

**POST** `/api/products/create`  
**Description:** Create a new product.

**Request Body:**

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "discount": 10,
  "image": "image_url",
  "status": "active",
  "categoryId": "category_id"
}
```

**Response:**

```json
{
  "message": "Product created successfully",
  "product": { ...productDetails }
}
```

---

#### Get All Products

**GET** `/api/products`  
**Description:** Retrieve all products.

**Query Parameters:**

- `category` (optional): Filter by category.
- `name` (optional): Search by product name.

**Response:**

```json
[
  { ...productDetails },
  { ...productDetails }
]
```

---

#### Get Product by ID

**GET** `/api/products/:id`  
**Description:** Retrieve a product by its ID.

**Response:**

```json
{ ...productDetails }
```

---

#### Get Product by Name

**GET** `/api/products/name/:name`  
**Description:** Retrieve a product by its name.

**Response:**

```json
{ ...productDetails }
```

---

#### Get Product by Discount

**GET** `/api/products/discount/:discount`  
**Description:** Retrieve products by discount percentage.

**Response:**

```json
[
  { ...productDetails },
  { ...productDetails }
]
```

---

#### Get Product by Category

**GET** `/api/products/category/:category`  
**Description:** Retrieve products by category.

**Response:**

```json
[
  { ...productDetails },
  { ...productDetails }
]
```

---

#### Update Product

**PUT** `/api/products/update/:id`  
**Description:** Update a product's details.

**Request Body:**

```json
{
  "name": "Updated Name",
  "price": 150,
  "discount": 5
}
```

**Response:**

```json
{
  "message": "Product updated successfully",
  "product": { ...updatedDetails }
}
```

---

### **Categories API**

#### Create a Category

**POST** `/api/categories/create`  
**Description:** Create a new category.

**Request Body:**

```json
{
  "name": "Category Name",
  "description": "Category Description"
}
```

**Response:**

```json
{
  "message": "Category created successfully",
  "category": { ...categoryDetails }
}
```

---

#### Get All Categories

**GET** `/api/categories`  
**Description:** Retrieve all categories.

**Response:**

```json
[
  { ...categoryDetails },
  { ...categoryDetails }
]
```

---

#### Get Category by Name

**GET** `/api/categories/:name`  
**Description:** Retrieve a category by its name.

**Response:**

```json
{ ...categoryDetails }
```

---

## Notes

- Replace `:id`, `:name`, `:discount`, and `:category` with actual values in the URL.
- The base URL for all endpoints is **http://localhost:5001**.
- Ensure proper headers like `Content-Type: application/json` for POST and PUT requests.
