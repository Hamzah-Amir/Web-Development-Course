# Faulty Calculator 🧮 (JavaScript)

This project demonstrates a **Faulty Calculator** written in JavaScript that performs incorrect operations **10% of the time**.

## 💡 Logic

- 90% of the time: performs correct operations (`+`, `-`, `*`, `/`)
- 10% of the time: performs wrong operations as follows:

| Intended | Faulty |
|----------|--------|
| `+`      | `-`    |
| `-`      | `/`    |
| `/`      | `*`    |
| `*`      | `+`    |

## 🛠 Functions

- `sum(x, y)` → `x + y`
- `subtract(x, y)` → `x - y`
- `multiply(x, y)` → `x * y`
- `divide(x, y)` → `x / y`

**Faulty versions:**
- `faulty_sum(x, y)` → `x - y`
- `faulty_subtract(x, y)` → `x / y`
- `faulty_multiply(x, y)` → `x + y`
- `faulty_divide(x, y)` → `x * y`

## 🔁 Usage

```js
console.log(faulty_calculator(3, 4, "/"));
