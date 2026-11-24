# AJAX with HTML, XML and JSON
## Programs Using AJAX to Load HTML, XML and JSON Data Without Reloading the Page

**Lab Experiment 9 Report**

## 1. Introduction and Objective

AJAX (Asynchronous JavaScript and XML) is a technique that allows a web page to request data from a server in the background and update only a part of the page without reloading the entire page.

The data can be in different formats, such as HTML, XML, JSON, or plain text. This experiment demonstrates five programs that load HTML, XML, and JSON data and also send JSON data to a server.

**Objectives:**

- Understand how AJAX works and why it is asynchronous.
- Use `XMLHttpRequest` and the newer `fetch()` API.
- Load an HTML fragment and insert it into a web page.
- Load and read an XML document using the XML DOM.
- Load JSON, convert it into JavaScript objects, and filter and sort it.
- Send JSON data to a server using a POST request.
- Handle errors such as missing files and network failures.

## 2. Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Page | HTML5, CSS3 | Layout and styling |
| Client Logic | JavaScript (ES6) | `XMLHttpRequest`, `fetch()`, and DOM updates |
| Data Formats | HTML, XML, JSON | Different types of data loaded |
| Server | Node.js (`http` module, no packages) | Serves files and handles POST requests |
| Tools | VS Code, Chrome / Edge DevTools (Network tab) | Writing code and monitoring requests |

## 3. How to Run

AJAX does not work when `index.html` is opened directly from the disk using `file://`, because browsers restrict such requests. The page must be served over `http://`.

### Option A: Node.js (Recommended)

This option is required for Program 4.

1. Open the `exp9-ajax` folder in VS Code.
2. Open the terminal using `Ctrl + \``.
3. Run the following command:

```bash
node server.js
```

4. Open the following address in Chrome or Edge:

```text
http://localhost:3000
```

5. Press `Ctrl + C` in the terminal to stop the server.

### Option B: VS Code Live Server

Programs 1, 2, 3, and 5 work with this option. Program 4 requires the Node.js server.

1. Right-click `index.html`.
2. Select **Open with Live Server**.

### Option C: Python

This option has the same limitations as Live Server.

Run the following command inside the project folder:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## 4. Project Structure

```text
exp9-ajax/
├── index.html              # Page with five programs (HTML, CSS and JavaScript)
├── server.js               # Small Node.js web server
├── partials/
│   └── about.html          # HTML fragment loaded by Program 1
├── data/
│   ├── students.xml        # XML data loaded by Program 2
│   └── products.json       # JSON data loaded by Program 3
└── REPORT.md               # This report
```

## 5. Theory

### 5.1 How AJAX Works

AJAX allows the browser to communicate with a server in the background without reloading the entire web page.

```text
Browser (page stays open)                    Server
       |                                         |
       | 1. JavaScript creates a request          |
       |---------------------------------------->|
       |                                         |
       | 2. User can keep using the page          |
       |                                         |
       |             3. Server finds or builds data
       |                                         |
       |<----------------------------------------|
       | 4. JavaScript receives the response      |
       | 5. JavaScript updates part of the page   |
```

Asynchronous means that the browser does not freeze while waiting for the server response. A function executes when the response arrives.

### 5.2 XMLHttpRequest readyState and Common Status Codes

The `XMLHttpRequest` object has different readyState values that represent the progress of a request.

| readyState | Name | Meaning |
|---|---|---|
| 0 | UNSENT | Request object created |
| 1 | OPENED | `open()` has been called |
| 2 | HEADERS_RECEIVED | Response headers have arrived |
| 3 | LOADING | Response body is being downloaded |
| 4 | DONE | Request has finished; check the status |

**Common HTTP Status Codes:**

| Status | Meaning |
|---|---|
| 200 | OK: Request succeeded |
| 400 | Bad Request: Server could not understand the data |
| 403 | Forbidden |
| 404 | Not Found: Requested file does not exist |
| 405 | Method Not Allowed |

### 5.3 HTML vs XML vs JSON

| Aspect | HTML | XML | JSON |
|---|---|---|---|
| Purpose | Ready-made page content | General structured data | Structured data for programs |
| Read in JavaScript | `innerHTML` | `responseXML` and DOM methods | `JSON.parse()` or `response.json()` |
| Size | Larger, contains markup and styling hooks | Larger, uses opening and closing tags | Smaller and lighter |
| Readable by Humans | Yes | Yes | Yes |
| Typical Use Today | Loading page fragments | Older web services and feeds | Most modern APIs |

### 5.4 XMLHttpRequest vs fetch()

| Aspect | `XMLHttpRequest` | `fetch()` |
|---|---|---|
| Style | Events and callbacks such as `onload` and `onreadystatechange` | Promises; works with `async` / `await` |
| Code Length | Longer | Shorter and cleaner |
| JSON | Manual `JSON.parse(xhr.responseText)` | `await res.json()` |
| HTTP Errors | Check `xhr.status` | Check `res.ok`; a 404 does not automatically throw an error |
| Progress Events and Request Abort | Built in | Requires additional code, such as `AbortController` |

## 6. Programs

### 6.1 Program 1: AJAX with HTML (XMLHttpRequest)

**Aim:** To load an HTML fragment from the server and insert it into the web page without reloading it.

**Key Code Snippet:**

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "partials/about.html", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        out.innerHTML = xhr.responseText;
    } else {
        showError("Could not load the page (HTTP " + xhr.status + ").");
    }
};

xhr.onerror = function () {
    showError("Network error.");
};

xhr.send();
```

**Expected Result:**

- Clicking Load HTML displays the content of `about.html` inside the page without reloading it.
- The log displays status 200.
- Loading a missing file displays an error message and status 404.

**Note:** `innerHTML` is used because the file belongs to the same site and is trusted. HTML from an unknown source should not be inserted this way.

**Output:**  
*(Insert screenshots of the successful 200 response and 404 error case.)*

### 6.2 Program 2: AJAX with XML (XMLHttpRequest)

**Aim:** To load an XML file, read its elements and attributes, and display the information in a table.

**Key Code Snippet:**

```javascript
let xml = xhr.responseXML;

if (!xml) {
    xml = new DOMParser().parseFromString(
        xhr.responseText,
        "application/xml"
    );
}

const students = xml.getElementsByTagName("student");

Array.from(students).forEach((s) => {
    const id = s.getAttribute("id");
    const name = s.getElementsByTagName("name")[0].textContent;
});
```

**Expected Result:**

A table containing five students appears with the following details:

- Student ID
- Name
- Course
- Year
- Marks

The displayed average marks are **80.4**.

The log displays:

```text
5 <student> elements found
```

If the XML document is not well-formed, an error message is displayed.

**Output:**  
*(Insert screenshot of the XML student table.)*

### 6.3 Program 3: AJAX with JSON (fetch() and XMLHttpRequest)

**Aim:** To load JSON data, convert it into JavaScript objects, and filter and sort the data in the browser.

**Key Code Snippet:**

```javascript
const res = await fetch("data/products.json");

if (!res.ok) {
    throw new Error("HTTP " + res.status);
}

const products = await res.json();
```

The second button performs the same operation using `XMLHttpRequest` and `JSON.parse(xhr.responseText)`. This allows both methods to be compared.

**Expected Result:**

- Eight product cards appear on the page.
- The category and sorting menus become active.
- Selecting the `book` category displays three books.
- Selecting **Price: Low to High** places Clean Code (Rs. 499) first.

**Output:**  
*(Insert screenshots showing all products, filtered products, and products sorted by price.)*

### 6.4 Program 4: Sending JSON to the Server (POST)

**Aim:** To send data to the server in JSON format and display the JSON response.

**Key Code Snippet:**

```javascript
const res = await fetch("/api/echo", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message })
});

const data = await res.json();
```

The `server.js` file reads the request body, checks whether `name` and `message` are present, and sends a JSON response containing:

- A reply
- The received values
- Character count
- Server time

**Expected Result:**

| Input | Result |
|---|---|
| Name and message filled | Status 200; formatted JSON reply is displayed |
| A field left empty | Validation message appears; no request is sent |
| Server not running or Live Server used | "Request failed" message appears |

**Output:**  
*(Insert screenshot of the JSON reply.)*

### 6.5 Program 5: Watching an XMLHttpRequest Step by Step

**Aim:** To observe how the `readyState` values change during an AJAX request.

**Expected Log for a Successful Request:**

```text
created: readyState = 0 (UNSENT)
readyState = 1 (OPENED)
readyState = 2 (HEADERS_RECEIVED)
readyState = 3 (LOADING)
readyState = 4 (DONE) | status = 200 | bytes = ...
```

For `data/nothing.json`, the last line displays `status = 404`.

This demonstrates that a completed request (`readyState = 4`) is not necessarily a successful request.

For very small files, readyState 3 may be skipped.

**Output:**  
*(Insert screenshots of successful 200 and unsuccessful 404 requests.)*

## 7. Problems Faced and Solutions

| Problem | Cause | Solution |
|---|---|---|
| Nothing loaded; Console showed a CORS or blocked error | Page was opened using `file://` | Serve the page over `http://` using `node server.js` or Live Server |
| `Cannot GET` or 404 for a data file | Incorrect file path or server started from another folder | Run the server inside `exp9-ajax` and check the file path |
| `xhr.responseXML` was `null` | Server sent XML with an incorrect content type | Send `application/xml` or parse `responseText` using `DOMParser` |
| `fetch()` did not throw an error for a missing file | `fetch()` only rejects for network errors, not HTTP error responses | Check `res.ok` and throw an error for 404 and 500 |
| `Unexpected token` while reading JSON | JSON file was invalid, for example, due to a trailing comma | Validate JSON using `JSON.parse()` inside a `try` / `catch` block |
| Old data appeared after editing a file | Browser cached the response | Hard refresh using `Ctrl + F5`; the server sends `Cache-Control: no-store` |
| POST returned 405 or "Request failed" | Page was served using Live Server, which does not provide `/api/echo` | Use `node server.js` for Program 4 |
| Page could break with special characters in data | Data was inserted using `innerHTML` | Insert server data using `textContent` |

*Note: Keep only the problems that were actually faced during the experiment.*

## 8. Testing

The following test cases are used to verify the working of all five programs.

| Test | Expected Result |
|---|---|
| Open `http://localhost:3000` | Page loads with five programs and no warning banner |
| Open `index.html` directly from disk | Banner asks the user to start the server |
| Program 1: Load HTML | About text appears; status 200 is displayed in the log |
| Program 1: Load a missing file | Error message appears; status 404 |
| Program 2: Load XML | Table with five students appears; average marks are 80.4 |
| Program 3: Load using `fetch()` | Eight product cards appear; log shows content type `application/json` |
| Program 3: Load using `XMLHttpRequest` | Same eight product cards appear |
| Program 3: Select category "book" | Three books are displayed |
| Program 3: Sort by price, low to high | Clean Code appears first and ThinkPad X1 appears last |
| Program 4: Send name and message | Status 200 and a JSON reply are displayed |
| Program 4: Leave a field empty | Validation message appears; no request is sent |
| Program 5: Request `data/nothing.json` | readyState reaches 4 with status 404 |
| DevTools: Network tab | Request appears without the page reloading |
| Stop the server and click a Load button | "Network error" message appears |

**Automated Server Check:**

The report describes an automated server check performed using Node.js against `server.js`. The reported results were:

- The page, HTML fragment, XML, and JSON files were served with status 200 and the correct content types.
- The JSON file contained eight products.
- The XML file contained five students.
- A missing file returned 404.
- A path-traversal attempt returned 403.
- `/api/echo` returned 200 for valid JSON, 400 for a missing field or invalid JSON, and 405 for a GET request.

**Output:**  
*(Insert screenshots of the main tests and the browser Network tab.)*

## 9. Limitations and Future Scope

### Current Limitations

- The data files are static, so submitted information is not stored on the server.
- The Node.js server is a minimal teaching server and is not intended for production use.
- Most requests do not have a loading indicator, and there is no automatic retry on failure.
- Cross-origin requests (CORS) and authentication are not covered.

### Possible Improvements

- Load data from a real public API using `fetch()` and handle CORS.
- Store submitted data in a database such as MongoDB.
- Add loading spinners, timeouts, and request cancellation using `AbortController`.
- Use JSON instead of XML for new services.
- Add pagination and server-side search.

## 10. Conclusion

This experiment demonstrated how AJAX updates part of a web page without reloading the entire page.

HTML, XML, and JSON data were loaded using `XMLHttpRequest` and `fetch()`. XML data was read through the XML DOM, while JSON was converted into JavaScript objects and filtered and sorted. A JSON object was also sent to a Node.js server using a POST request.

The experiment covered HTTP status codes, network errors, and invalid data handling. It also demonstrated that JSON with `fetch()` and `async` / `await` is a common approach for modern web development, while `XMLHttpRequest` remains useful for understanding how AJAX requests work.