
# 🚀 React Native Basics: JSX, Components, Props, State, Hooks

## 📚 Topics Covered

### 1. **JSX (JavaScript XML)**

JSX is a syntax extension for JavaScript used in React and React Native to describe UI elements.

- It looks similar to HTML but works in JavaScript.
- JSX elements are compiled into `React.createElement()` calls.
- Allows embedding expressions using `{}`.

**Example:**

```jsx
<Text>{name}</Text>
```

---

### 2. **Components**

Components are the building blocks of a React Native app. They can be:

- **Functional Components** – Basic JavaScript functions using hooks.
- **Class Components** – ES6 classes with lifecycle methods (less common now).

**Functional Component Example:**

```jsx
const Welcome = () => {
  return <Text>Welcome to React Native!</Text>;
};
```

---

### 3. **Props (Properties)**

Props are inputs to components. They allow passing data from parent to child components.

- Props are **read-only**.
- Props are accessed via `props` object or destructuring.

**Example:**

```jsx
const Greeting = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

// Usage
<Greeting name="Akshay" />;
```

---

### 4. **State**

State is data that changes over time. It is managed within a component and causes re-rendering on change.

**useState Example:**

```jsx
const [count, setCount] = useState(0);
```

---

### 5. **Hooks**

#### 🔹 `useState`:

Allows you to add state to functional components.

```jsx
const [value, setValue] = useState(initialValue);
```

### 🔹 `useEffect`:

Performs side effects (like fetching data) in functional components.

```jsx
useEffect(() => {
  // Code runs on mount or when dependencies change
}, [dependency]);
```

---

## 🛠️ Tasks

### ✅ Task 1: Build a Counter App with `useState`

#### 🎯 Goal:

Create a counter that increments and decrements the value using buttons.

#### 📦 Code:

---

### ✅ Task 2: Create a Weather Card using Props

#### 🎯 Goal:

Build a reusable weather card component that receives data via props.

### 📦 Usage in `App.js`:
```jsx
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CounterApp from "./components/CounterApp";
import FormData from "./components/FormData";
import WeatherData from "./components/WeatherData";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CounterApp />
      <FormData />
      <WeatherData />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

## ✅ Summary

| Topic      | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| JSX        | Syntax to write UI using HTML-like tags in JavaScript                      |
| Components | Reusable UI pieces, either functional or class-based                       |
| Props      | Data passed to components from parent                                      |
| State      | Mutable data within a component                                            |
| Hooks      | Functions like `useState` and `useEffect` for state and lifecycle handling |

---

