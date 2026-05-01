:root {
  --primary: #a2d2ff;
  --secondary: #bde0fe;
  --bg: #f8f9fa;
  --text: #495057;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.app-container {
  background: white;
  width: 90%;
  max-width: 450px;
  padding: 30px;
  border-radius: 30px; /* Bordi molto arrotondati */
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

nav {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

nav button {
  background: var(--secondary);
  border: none;
  padding: 8px 15px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  color: #555;
}

section { display: none; text-align: center; }
section.active { display: block; animation: fadeIn 0.5s; }

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #eee;
  border-radius: 15px;
  background: #fdfdfd;
  box-sizing: border-box;
}

.main-btn {
  background: var(--primary);
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.timer-display {
  font-size: 4rem;
  font-weight: bold;
  color: var(--primary);
  margin: 20px 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.upload-box {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.riassunti-grid {
  display: grid;
  gap: 15px;
  margin-top: 20px;
}

.card-riassunto {
  background: #fff;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.card-riassunto a {
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
}