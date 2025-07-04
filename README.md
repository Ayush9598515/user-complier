# 🧠 AyCode - AlgoU Online C++ Compiler

A basic **online C++ compiler** built with React and Node.js that allows users to:
- Write and edit C++ code
- Provide custom input
- Execute the code
- View the output in real-time
![Screenshot (274)](https://github.com/user-attachments/assets/f16bad06-d9f8-453f-b5b8-2a68c46014de)


---

## ✨ Features

- 🖥️ **Live Code Editor**: Built with `react-simple-code-editor` and PrismJS for syntax highlighting.
- 🧾 **Custom Input Box**: User can provide inputs to the program at runtime.
- ⚙️ **Backend Compilation**: Code is sent to the backend (Node.js + child_process) and compiled/executed in a secure environment.
- 💡 **Beautiful UI**: Styled with Tailwind CSS and fully responsive.
- 🌓 **Dark/Light Mode Toggle** via Navbar.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite + PrismJS
- **Backend**: Node.js + Express + C++
- **Editor**: `react-simple-code-editor`
- **Styling**: Tailwind CSS

---

## 📂 Folder Structure (Client Side)

```
/frontend
  ├── components
  ├── pages
  │   └── Compiler.jsx
  ├── App.jsx
  └── main.jsx
```

---

## 📡 How It Works

1. User types C++ code in the editor.
2. Optional input is entered in the "Program Input" box.
3. Clicking **Run Code** sends a request to the backend.
4. Backend compiles and runs the code using `g++`, returns the output.
5. Output is displayed on the UI.

---

## 🧪 Example Code

```cpp
#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cin >> num1 >> num2;
    cout << "Sum is: " << num1 + num2 << endl;
    return 0;
}
```

Sample input:
```
3 5
```

Output:
```
Sum is: 8
```

---

![Screenshot (274)](https://github.com/user-attachments/assets/e072c81b-fac5-478b-a9d5-6e28570b32fa)



---

## 📦 How to Run Locally

### Frontend:
```bash
cd frontend
npm install
npm run dev
```

### Backend:
```bash
cd backend
npm install
node index.js
```

Make sure `g++` is installed and accessible from terminal.

---
![Screenshot (275)](https://github.com/user-attachments/assets/fb4d468a-c974-4529-be45-8154f7197cfc)





## 📌 Future Plans

- Add support for other languages (Python, Java, etc.)
- Save code snippets with user authentication
- Competitive programming mode with timer

---

## 👨‍💻 Author

**Ayush Pandey**  
🔗 GitHub: [Ayush9598515](https://github.com/Ayush9598515)

---

## 📜 License

This project is open-source and available under the MIT License.
