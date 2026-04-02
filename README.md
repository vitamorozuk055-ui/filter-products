# filter-products


```markdown
# 🛍️ Tech-X Ultimate Store

Інтерактивний веб-додаток для перегляду та фільтрації гаджетів (iPhone та iPad).

Проєкт дозволяє користувачу швидко знаходити потрібний пристрій за різними параметрами: модель, памʼять, стан та ціна.

---

## 🚀 Features

- 🔍 Фільтрація товарів за:
  - Типом пристрою (iPhone / iPad)
  - Моделлю
  - Обʼємом памʼяті
  - Станом (новий / б/у)
  - Ціною (range slider)

- ⚡ Динамічне оновлення списку товарів
- 📊 Показ кількості знайдених результатів
- 🎯 Автоматичне оновлення моделей залежно від вибраного пристрою
- 🧠 Логіка фільтрації на чистому JavaScript (без бібліотек)

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox, Custom Variables)
- Vanilla JavaScript (ES6)

---

## 📂 Project Structure

```

project/
│── index.html     # Основна структура сторінки
│── style.css      # Стилі (темна тема + UI)
│── script.js      # Логіка фільтрації і рендеру

```

---

## ⚙️ How It Works

1. Дані про товари зберігаються в масиві `products` (JavaScript)
2. Користувач вибирає фільтри
3. При натисканні кнопки **"Застосувати"**:
   - Викликається функція `applyFilters()`
   - Дані фільтруються
   - Результат передається в `render()`
4. Сторінка оновлюється без перезавантаження

---

## 📸 Demo

Додай сюди скріншот:

```

![App Screenshot](your-image-link)

```

---

## 🧩 Key Concepts

- DOM Manipulation
- Event Handling
- Array Methods (`filter`, `map`)
- Dynamic UI Rendering
- State Management (через змінні)

---

## 🚧 Possible Improvements

- 🛒 Реалізувати справжній кошик
- 🔗 Підключити backend / API
- 💾 Збереження фільтрів (localStorage)
- 📱 Адаптивність для мобільних
- ⚡ Пошук по назві

---

## ▶️ Run Project

Просто відкрий файл:

```

index.html

```



---

## 📄 License

MIT License



## 👨‍💻 Author

Viktor

⭐ Якщо тобі подобається проєкт — постав зірочку!





