# 📦 Amazon Scraper with Bun + Vite

This is a simple fullstack project that scrapes product listings from the first page of Amazon search results based on a keyword entered by the user.

## 🔍 Objective

Allow users to enter a search keyword and view the following information for each product found:

- Product title  
- Rating (stars)  
- Number of reviews  
- Product image URL

## 🧰 Technologies Used

### Backend
- [Bun](https://bun.sh/) – Ultra-fast JavaScript runtime
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [JSDOM](https://github.com/jsdom/jsdom)

### Frontend
- [Vite](https://vitejs.dev/)
- HTML, CSS, Vanilla JavaScript

## ⚙️ How to Run the Project

### Prerequisites

- [Bun](https://bun.sh/docs/installation) installed  
- [Node.js and npm](https://nodejs.org/) for the frontend (Vite)

### 🔧 Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name/backend
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the server:
   ```bash
   bun run dev
   ```

> The backend will be available at `http://localhost:3000/api/scrape?keyword=example`

### 🎨 Frontend

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

> The frontend will usually run at `http://localhost:5173`

## 🧪 How to Use

1. Open the frontend in your browser.  
2. Enter a search keyword (e.g., "laptop").  
3. Click the **Search** button.  
4. The scraped results will be displayed in a clean format.

## 📁 Project Structure

```
├── backend/
│   ├── index.js (or app.js)
│   ├── package.json
│   └── ...
├── frontend/
│   ├── index.html
│   ├── main.js
│   ├── style.css
│   └── ...
└── README.md
```

## 🧹 Final Notes

- Be aware that Amazon may block frequent requests or bots. This project is for educational purposes only.
- If Amazon's layout changes, scraping might break. You’ll need to update the HTML selectors in the code.

---

## 📝 Author

Developed by [Guilherme](https://www.linkedin.com/in/guilhermee-santos/)