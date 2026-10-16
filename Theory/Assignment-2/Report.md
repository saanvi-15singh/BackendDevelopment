# Assignment 2: PostgreSQL as SQL + NoSQL — Working with JSONB

**Name:** Saanvi Singh  
**Course:** Backend Development  
**Assignment:** 2  
**Topic:** PostgreSQL as SQL + NoSQL: Working with JSONB

---

# PART A: Conceptual Questions and Answers

## Question 1: What is JSONB in PostgreSQL, and how does it differ from the plain JSON type?

### Answer

PostgreSQL provides two data types, JSON and JSONB, for storing JSON-formatted data. The main difference is how PostgreSQL stores and processes the information.

The JSON data type stores the original JSON text, preserving its formatting, whitespace, and key order. PostgreSQL parses the text when it needs to process the data. In comparison, JSONB stores data in a decomposed binary format. It does not preserve whitespace or the original key order, and duplicate object keys are not retained as separate values.

JSONB is useful when an application frequently searches, filters, or updates JSON data. It supports operators for retrieving values and searching for particular attributes. It also supports indexing through a Generalized Inverted Index (GIN), which can improve the performance of suitable queries.

Although inserting JSONB data may require additional processing, JSONB is generally a good choice when flexible data must be queried efficiently. Plain JSON may be preferable when preserving the original JSON text is important.

### SQL Example

```sql
CREATE TABLE product_example (
    id INTEGER PRIMARY KEY,
    attributes JSONB
);

INSERT INTO product_example
VALUES (1, '{"brand":"HP","ram":"16GB"}');

SELECT attributes ->> 'brand' AS brand
FROM product_example;
```

**Expected output:**

```text
 brand
-------
 HP
```

In conclusion, JSON preserves the original JSON text, whereas JSONB is designed for efficient processing and querying.

---

## Question 2: How can PostgreSQL work as both a SQL and a NoSQL database in the same table?

### Answer

PostgreSQL can combine traditional relational data with flexible document-style data in a single table. Regular columns can store structured information such as product ID, name, category, and price. These columns have defined data types and can use constraints, primary keys, and other relational database features.

A JSONB column can store attributes that vary between records. For example, a laptop may have RAM and storage attributes, while a chair may have material and adjustable-height attributes. The table does not need a separate column for every possible product attribute.

Common information can remain in ordinary SQL columns, while varying information is stored inside JSONB. PostgreSQL can then use normal SQL conditions and JSONB operators in the same query.

This approach combines the advantages of relational databases and flexible document storage. PostgreSQL also supports transactions, joins, and relationships between tables.

### SQL Example

```sql
CREATE TABLE products (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    attributes JSONB
);
```

The following query retrieves electronic products and their brands:

```sql
SELECT
    name,
    price,
    attributes ->> 'brand' AS brand
FROM products
WHERE category = 'Electronics';
```

Here, category and price are relational columns, while brand is retrieved from the JSONB column.

Therefore, PostgreSQL can support structured SQL data and flexible document-like attributes within the same database table.

---

## Question 3: Give an example of a JSONB query using `->`, `->>`, `@>`, and `?`. State what each returns and explain the difference between the first two.

### Answer

PostgreSQL provides several JSONB operators that allow users to retrieve and search information stored in JSON documents.

The `->` operator retrieves a field as a JSON value. The `->>` operator retrieves a field as text. The `@>` operator checks whether a JSONB value contains a specified JSON structure. The `?` operator checks whether a particular key exists at the top level of a JSONB object.

Consider the following JSONB data:

```json
{
    "brand": "HP",
    "ram": "16GB",
    "wireless": true
}
```

### 1. The `->` operator

```sql
SELECT name, attributes -> 'brand' AS brand
FROM products
WHERE name = 'Laptop';
```

This returns the brand as a JSON value, typically displayed as `"HP"`.

### 2. The `->>` operator

```sql
SELECT name, attributes ->> 'brand' AS brand
FROM products
WHERE name = 'Laptop';
```

This returns the brand as text, displayed as `HP`.

### 3. The `@>` operator

```sql
SELECT name
FROM products
WHERE attributes @> '{"brand":"HP"}';
```

This finds products whose attributes contain the brand HP.

### 4. The `?` operator

```sql
SELECT name
FROM products
WHERE attributes ? 'ram';
```

This finds products that have a top-level `ram` key.

The main difference between `->` and `->>` is that the former returns JSON, whereas the latter returns text. The `@>` and `?` operators are primarily used to search JSONB data.

These operators allow PostgreSQL to query flexible attributes without requiring a separate table column for every possible attribute.

---

## Question 4: How can a GIN index on a JSONB column change query performance? State what kind of query it speeds up and one query it does not help with.

### Answer

A GIN (Generalized Inverted Index) index can improve the performance of searches involving JSONB data. Instead of checking every row individually for certain supported conditions, PostgreSQL may use the index to locate matching records more efficiently.

A GIN index is particularly useful for suitable JSONB containment queries using the `@>` operator. It can be valuable when a table contains many rows and applications frequently search for specific attributes.

### SQL Example

```sql
CREATE INDEX idx_products_attributes
ON products
USING GIN (attributes);
```

The following query searches for products whose attributes contain `"wireless": true`:

```sql
SELECT name
FROM products
WHERE attributes @> '{"wireless":true}';
```

PostgreSQL may use the GIN index to locate matching products.

However, an index does not guarantee that every query will become faster. PostgreSQL's query planner decides whether using the index is worthwhile. For a small table, a sequential scan may be more efficient because there are only a few records.

A GIN index on the JSONB column does not directly help a query that sorts products using the separate price column. An appropriate index on price would be more relevant to that operation.

The `EXPLAIN ANALYZE` command can be used to compare query plans and execution times before and after creating an index.

In conclusion, a GIN index can improve suitable JSONB searches, but actual performance depends on the query, data size, and query planner.

---

## Question 5: Where could PostgreSQL with JSONB replace a MongoDB deployment, and where would MongoDB still be the better fit? Discuss transactions, joins, schema enforcement, and horizontal scaling.

### Answer

PostgreSQL with JSONB can replace a MongoDB deployment when an application needs relational database features together with flexible document-style attributes.

For example, an online store may contain products with different attributes but still require reliable transactions, joins between products and orders, foreign keys, and constraints. PostgreSQL can store common fields in typed columns and varying attributes in JSONB. This allows an application to use SQL and relational features without giving up flexible data storage.

PostgreSQL can enforce a clear schema for important fields such as product ID, price, and category. JSONB attributes can vary between products, although additional validation may be needed when particular attributes must follow strict rules.

MongoDB may be a better fit when an application naturally stores and retrieves nested documents as individual units. It also supports schema validation and transactions. Its document-oriented model can make flexible document structures convenient to manage.

Horizontal scaling is another consideration. MongoDB provides built-in sharding capabilities for distributing collections across multiple servers. PostgreSQL also supports several scaling approaches, but horizontal distribution may require additional architecture or extensions depending on the workload.

Therefore, PostgreSQL is a strong choice for applications requiring relational integrity, joins, SQL queries, and flexible attributes together. MongoDB can be suitable for applications that primarily use documents and have specific horizontal scaling requirements.

The best choice depends on the application's data structure, consistency requirements, workload, and expected growth.

---

# PART B: Practical Implementation

## 1. Objective

The objective of this practical is to explore how PostgreSQL can store relational data together with flexible JSONB attributes.

The practical involves:

1. Creating a PostgreSQL database.
2. Creating a product catalogue table.
3. Inserting five products across at least three categories.
4. Querying JSONB data using `->`, `->>`, `@>`, and `?`.
5. Updating JSONB attributes.
6. Creating a GIN index.
7. Comparing query plans using `EXPLAIN ANALYZE`.
8. Storing the same products in MongoDB.
9. Comparing PostgreSQL and MongoDB.

---

## 2. PostgreSQL Setup

PostgreSQL 18 was installed on Windows.

Initially, the `psql` command was not recognised in the VS Code terminal. This occurred because the PostgreSQL installation directory was not included in the system PATH environment variable.

The PostgreSQL installation directory was:

`C:\Program Files\PostgreSQL\18\bin`

After adding this directory to PATH, I verified the installation using:

```powershell
psql --version
```

I connected to PostgreSQL using:

```powershell
psql -U postgres -h localhost -p 5432
```

The database used for this assignment was named `product_catalog`.

---

## 3. Problems Faced During the Assignment and Their Solutions

### Problem 1: `psql` command was not recognised

**Error:** The terminal displayed a message indicating that `psql` was not recognised as a command.

**Reason:** Windows could not locate the PostgreSQL executable because its installation directory was not included in PATH.

**Solution:** I located the PostgreSQL `bin` directory and added it to the PATH environment variable. I then verified the installation by running:

```powershell
psql --version
```

After updating PATH, PostgreSQL commands could be executed from the terminal.

### Problem 2: The database already existed

**Error:** When I attempted to create `product_catalog` again, PostgreSQL indicated that the database already existed.

**Reason:** A database with the same name had already been created.

**Solution:** I checked the existing database and decided whether to reuse or recreate it. A database cannot be created again under the same name while it already exists.

### Problem 3: PostgreSQL could not drop the database

**Error:** When I ran:

```sql
DROP DATABASE product_catalog;
```

PostgreSQL reported that the database was being accessed by other users or sessions.

**Reason:** Another connection was still using the database.

**Solution:** I connected to the separate `postgres` database and terminated the other connections to `product_catalog`.

```sql
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'product_catalog'
  AND pid <> pg_backend_pid();
```

After terminating the other connections, I dropped and recreated the database:

```sql
DROP DATABASE product_catalog;
```

```sql
CREATE DATABASE product_catalog;
```

This operation removes the existing database and its contents, so it should only be performed when the existing data is no longer required.

### Problem 4: Incomplete `CREATE TABLE` statement

**Error:** I entered an incomplete `CREATE TABLE` statement and then started an `INSERT` command. PostgreSQL returned a syntax error near `INSERT`.

**Reason:** PostgreSQL was still waiting for the incomplete SQL statement to be completed.

**Solution:** I cancelled the incomplete statement using `Ctrl + C`. I then executed the complete `CREATE TABLE` statement separately and ended it with a semicolon.

This helped me understand the importance of writing complete SQL statements before executing the next command.

### Problem 5: The products table already existed

**Error:**

```text
ERROR: relation "products" already exists
```

**Reason:** The `products` table had already been created in the database.

**Solution:** Instead of trying to create it again, I checked its structure:

```sql
\d products
```

I then checked whether it contained any records:

```sql
SELECT * FROM products;
```

The table existed but contained zero rows. Therefore, the correct next step was to insert the five required products into the existing table.

---

## 4. PostgreSQL Implementation

### Step 1: Create the products table

Execute the following command only if the table does not already exist:

```sql
CREATE TABLE products (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    attributes JSONB
);
```

The table contains four regular columns and one JSONB column.

- `id`: Unique product identifier.
- `name`: Product name.
- `category`: Product category.
- `price`: Product price.
- `attributes`: Flexible product information stored as JSONB.

### Step 2: Insert five products

Since the table already existed but was empty, I inserted the following records:

```sql
INSERT INTO products (name, category, price, attributes)
VALUES
('Laptop', 'Electronics', 65000.00,
 '{"brand":"HP","ram":"16GB","storage":"512GB SSD","color":"Silver","wireless":true}'),
('Smartphone', 'Electronics', 30000.00,
 '{"brand":"Samsung","ram":"8GB","storage":"256GB","color":"Black","wireless":true}'),
('Office Chair', 'Furniture', 7500.00,
 '{"brand":"Green Soul","material":"Mesh","color":"Black","adjustable":true}'),
('Coffee Maker', 'Appliances', 4500.00,
 '{"brand":"Philips","capacity":"1.2L","power":"1000W"}'),
('Desk', 'Furniture', 12000.00,
 '{"brand":"IKEA","material":"Wood","color":"Brown"}');
```

The expected confirmation is:

```text
INSERT 0 5
```

### Step 3: Display the products

```sql
SELECT
    id,
    name,
    category,
    price,
    jsonb_pretty(attributes) AS attributes
FROM products;
```

This query displays the products and their JSONB attributes.

### Step 4: Retrieve JSON using `->`

```sql
SELECT name, attributes -> 'brand' AS brand
FROM products;
```

The `->` operator retrieves the brand as a JSON value.

### Step 5: Retrieve text using `->>`

```sql
SELECT name, attributes ->> 'brand' AS brand
FROM products;
```

The `->>` operator retrieves the brand as text.

### Step 6: Search JSONB data using `@>`

```sql
SELECT name, price
FROM products
WHERE attributes @> '{"brand":"HP"}';
```

This query finds the product whose brand is HP.

### Step 7: Check whether a key exists using `?`

```sql
SELECT name
FROM products
WHERE attributes ? 'ram';
```

This query finds products containing the `ram` key. The expected products are Laptop and Smartphone.

### Step 8: Update a JSONB attribute

```sql
UPDATE products
SET attributes = attributes || '{"discount_pct":10}'
WHERE name = 'Laptop';
```

Verify the updated record:

```sql
SELECT name, jsonb_pretty(attributes)
FROM products
WHERE name = 'Laptop';
```

The Laptop record should now contain the additional `discount_pct` attribute.

### Step 9: Check performance before creating the GIN index

```sql
EXPLAIN ANALYZE
SELECT name
FROM products
WHERE attributes @> '{"wireless":true}';
```

Record the actual execution plan and execution time displayed by PostgreSQL.

### Step 10: Create the GIN index

```sql
CREATE INDEX idx_products_attributes
ON products
USING GIN (attributes);
```

The index can help PostgreSQL locate matching JSONB records for suitable queries.

### Step 11: Check performance after creating the GIN index

Run the same query again:

```sql
EXPLAIN ANALYZE
SELECT name
FROM products
WHERE attributes @> '{"wireless":true}';
```

**Before creating the index:** Add the actual execution plan and execution time.

**After creating the index:** Add the actual execution plan and execution time.

The table contains only five records, so PostgreSQL may continue using a sequential scan. The actual query plans must be recorded rather than assuming that the index improved performance.

---

## 5. MongoDB Implementation

MongoDB is a document-oriented NoSQL database. The same product information can be stored as documents with nested attributes.

### Step 1: Verify the MongoDB installation

In the VS Code PowerShell terminal, run:

```powershell
mongosh --version
```

You can also check the server installation:

```powershell
mongod --version
```

### Step 2: Connect to MongoDB

```powershell
mongosh
```

Select the database:

```javascript
use product_catalog
```

### Step 3: Insert the products

Run the following command inside the MongoDB Shell:

```javascript
db.products.insertMany([
    {
        name: "Laptop",
        category: "Electronics",
        price: 65000,
        attributes: {
            brand: "HP",
            ram: "16GB",
            storage: "512GB SSD",
            color: "Silver",
            wireless: true,
            discount_pct: 10
        }
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 30000,
        attributes: {
            brand: "Samsung",
            ram: "8GB",
            storage: "256GB",
            color: "Black",
            wireless: true
        }
    },
    {
        name: "Office Chair",
        category: "Furniture",
        price: 7500,
        attributes: {
            brand: "Green Soul",
            material: "Mesh",
            color: "Black",
            adjustable: true
        }
    },
    {
        name: "Coffee Maker",
        category: "Appliances",
        price: 4500,
        attributes: {
            brand: "Philips",
            capacity: "1.2L",
            power: "1000W"
        }
    },
    {
        name: "Desk",
        category: "Furniture",
        price: 12000,
        attributes: {
            brand: "IKEA",
            material: "Wood",
            color: "Brown"
        }
    }
]);
```

This command inserts the five products into the MongoDB collection.

If the documents have already been inserted, check the collection before running `insertMany()` again to avoid duplicate records.

### Step 4: Display the products

```javascript
db.products.find().pretty();
```

Count the documents:

```javascript
db.products.countDocuments();
```

### Step 5: Find products by brand

```javascript
db.products.find(
    { "attributes.brand": "HP" },
    { _id: 0, name: 1, price: 1 }
);
```

This query finds products whose brand is HP.

### Step 6: Find products with a RAM attribute

```javascript
db.products.find(
    { "attributes.ram": { $exists: true } },
    { _id: 0, name: 1 }
);
```

This query finds products containing a RAM attribute.

### Step 7: Find wireless products

```javascript
db.products.find(
    { "attributes.wireless": true },
    { _id: 0, name: 1, price: 1 }
);
```

This query finds products whose wireless attribute is set to true.

### Step 8: Update the Laptop document

```javascript
db.products.updateOne(
    { name: "Laptop" },
    { $set: { "attributes.discount_pct": 10 } }
);
```

Verify the update:

```javascript
db.products.find(
    { name: "Laptop" },
    { _id: 0, name: 1, attributes: 1 }
);
```

Add actual MongoDB output and screenshots after successfully executing these commands.

---

## 6. PostgreSQL and MongoDB Comparison

| Feature | PostgreSQL with JSONB | MongoDB |
|---|---|---|
| Database type | Relational database | Document-oriented NoSQL database |
| Data storage | Rows and columns with JSONB attributes | Documents stored in collections |
| Flexible attributes | JSONB fields can differ between rows | Documents can have different fields |
| Query language | SQL and JSONB operators | MongoDB query language |
| Attribute search | `->`, `->>`, `@>`, and `?` | Dot notation and query operators |
| Updating attributes | SQL `UPDATE` and JSONB operations | `updateOne()` and `$set` |
| Indexing | GIN indexes support suitable JSONB queries | Indexes can be created on document fields |
| Relationships | Supports joins, constraints, and foreign keys | Supports document references and other relationship approaches |
| Horizontal scaling | Several approaches are available; distributed writes may require additional architecture | Built-in sharding supports horizontal distribution |

### Observations

PostgreSQL JSONB combines relational database features with flexible JSON storage. It allows an application to use structured columns for common information and JSONB for attributes that vary between products.

MongoDB stores information as documents and supports nested-field queries using dot notation. Both systems can store flexible product attributes, but they use different data models and query languages.

A GIN index can help PostgreSQL with suitable JSONB queries. However, its actual benefit depends on the table size, query, and query plan. Performance should be evaluated using the results of `EXPLAIN ANALYZE`.

---

## 7. Conclusion

This assignment demonstrates how PostgreSQL can combine relational data with flexible JSONB attributes in a single table. The JSONB operators `->`, `->>`, `@>`, and `?` allow users to retrieve and search JSON data. JSONB attributes can also be updated without adding new table columns.

The practical also explores the use of GIN indexing for JSONB searches and the evaluation of query performance using `EXPLAIN ANALYZE`. MongoDB provides a document-oriented alternative in which product attributes can be stored as nested fields and queried using dot notation.

The comparison shows that PostgreSQL is useful when an application needs relational integrity, SQL queries, joins, and flexible attributes together. MongoDB may be preferable for applications that naturally organize their data as documents and require document-oriented scaling features.

The final choice depends on the application's data structure, transaction requirements, query patterns, and scaling needs.

---

## 8. Evidence to Add Before Submission

- [ ] Screenshot of the PostgreSQL database and table.
- [ ] Screenshot or output showing the five inserted products.
- [ ] Results of all four JSONB operator queries.
- [ ] Output showing the updated Laptop attributes.
- [ ] `EXPLAIN ANALYZE` output before creating the GIN index.
- [ ] `EXPLAIN ANALYZE` output after creating the GIN index.
- [ ] MongoDB insertion and query results.
- [ ] Any additional observations required by the instructor.