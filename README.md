# 🌤 Weather App

A full-stack weather application that allows users to search for real-time weather information for any city, with autocomplete suggestions for a better user experience.

---

## 🚀 Features

* 🌍 Search weather by city name
* 🔍 Autocomplete suggestions while typing
* ⚡ Debounced API calls for optimized performance
* 🌡 Real-time weather data (temperature & condition)
* 🎨 Dynamic UI based on weather conditions
* ❌ Error handling for invalid city inputs

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS, JavaScript
* **API:** OpenWeatherMap API
* **Other:** Axios, dotenv

---

## 📦 Project Structure

```
weather-app/
│
├── public/
│   ├── js/
│   │   └── script.js
│
├── views/
│   └── index.ejs
│
├── .env
├── .gitignore
├── index.js
└── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file in root and add:

```
API_KEY=your_openweathermap_api_key
```

4. Run the server

```
nodemon index.js
```

5. Open in browser

```
http://localhost:3000
```

---

## 🧠 How It Works

* User types a city name
* Autocomplete suggestions are fetched using Geocoding API
* On selection, weather data is fetched using Weather API
* Data is rendered dynamically using EJS

---

## ⚡ Optimizations

* Implemented **debounce** to reduce unnecessary API calls
* Trimmed and encoded user input for clean API requests
* Handled API errors gracefully

---

## ⚠️ Limitations

* Relies on city name (may cause ambiguity in rare cases)
* No user authentication or saved preferences

---

## 🚀 Future Improvements

* Add search history using database
* Add favorite cities feature
* Use latitude & longitude for more accurate results
* Refactor into MVC structure (controllers/services)

---

## 📸 Preview
<img width="1888" height="871" alt="Screenshot 2026-04-17 192452" src="https://github.com/user-attachments/assets/a3035e3b-a8d2-4c98-9156-bdf78c462cd7" />

<img width="1884" height="864" alt="Screenshot 2026-04-17 192531" src="https://github.com/user-attachments/assets/3d1e7c5e-8d22-4689-96a8-b3831c3da4aa" />

<img width="1883" height="866" alt="Screenshot 2026-04-17 192516" src="https://github.com/user-attachments/assets/0ea43dba-7a13-4c8d-baa3-9cdc6e24f1aa" />


---

## 🙌 Acknowledgements

* OpenWeatherMap API for providing weather data

---

## 💡 Author

Tanya
