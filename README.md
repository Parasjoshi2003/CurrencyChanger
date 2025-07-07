# 💱 Real-Time Currency Converter

A sleek and responsive **Currency Converter** built with **React.js**. This app fetches live exchange rates using an API and allows users to convert between different currencies with ease. Built for learning, fun, and function. ✨

## 🚀 Features

- 🔄 Real-time currency conversion using up-to-date exchange rates.
- 🌍 Supports multiple international currencies.
- 🔁 One-click swap functionality.
- 🎯 Optimized state handling with React Hooks.
- 🧠 Custom Hook (`useCurrencyInfo`) for clean and reusable API logic.
- 🎨 Tailwind CSS for modern UI styling.

## 📸 Preview

![image](https://github.com/user-attachments/assets/d9c096bb-220b-4849-8631-79dc30b95c1b)



## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Custom Hooks**
- **Live Exchange Rate API**

## 🧠 How it Works

- Users input an amount and select **From** and **To** currencies.
- API returns a full list of rates for the selected "From" currency.
- The app calculates the converted amount using the selected "To" currency.
- Swap button switches the "From" and "To" currencies instantly.

## 📁 Folder Structure

src/
│
├── components/
│ └── Input.jsx # Controlled input component
│
├── customHooks/
│ └── useCurrencyInfo.js # Custom hook to fetch currency data
│
├── App.js # Main application logic
└── App.css # Styling


## 🧪 API Info

> The custom hook `useCurrencyInfo(currencyName1)` makes a request to a currency API and returns a key-value object of exchange rates based on the base currency.


   
