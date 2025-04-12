# 📰 NewsWay

**NewsWay** is a React.js-based news application that fetches real-time headlines using the [NewsAPI](https://newsapi.org/). Designed primarily for local development and testing, the app delivers top headlines and trending articles in a clean and responsive UI.

> ⚠️ **Note:** This application is restricted to `localhost` due to API limitations. The NewsAPI allows only **1000 requests per day** for free developer accounts. Hosting the app publicly may exhaust the quota quickly or result in failed requests.

---

## 🚀 Features

- ✅ Live news headlines from trusted sources  
- ✅ Simple, clean, and responsive design  
- ✅ Easy to configure with your own API key  
- ✅ Built with **React.js** and **Bootstrap**  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Bootstrap  
- **API:** [NewsAPI](https://newsapi.org/)  

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yashahuja24/NewsWay.git
cd NewsWay
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up API Key

1. Create a free account on [NewsAPI](https://newsapi.org/)  
2. Obtain your API key  
3. In the project directory, create a `.env` file and add:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

### 4. Start the Development Server

```bash
npm start
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
NewsWay/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 📌 Notes

- This app is intended **only for personal/local use** due to the API request limit.
- Avoid frequent refreshes to stay within the daily API request quota.
- You can customize categories, country codes, or styles easily.

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

## ✨ Author

Made by [Yashvardhan Ahuja](https://github.com/yashahuja24)
