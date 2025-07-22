// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Kunci jawaban (urut sesuai soal)
const kunciJawaban = ["b", "a", "c", "b"];

app.post("/submit-kuis", (req, res) => {
  const jawaban = req.body.jawaban;

  if (!Array.isArray(jawaban) || jawaban.length !== kunciJawaban.length) {
    return res.status(400).json({ error: "Jawaban tidak valid" });
  }

  let skor = 0;
  for (let i = 0; i < kunciJawaban.length; i++) {
    if (jawaban[i] === kunciJawaban[i]) skor++;
  }

  res.json({ skor, total: kunciJawaban.length });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
