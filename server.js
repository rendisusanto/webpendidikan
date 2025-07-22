const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit-kuis', (req, res) => {
  const jawaban = req.body;
  let benar = 0;

  // contoh logika penilaian sederhana
  const kunci = {
    soal1: "a",
    soal2: "b",
    soal3: "c",
    soal4: "a",
    soal5: "b"
  };

  Object.keys(kunci).forEach((k) => {
    if (jawaban[k] === kunci[k]) benar++;
  });

  res.json({
    skor: benar,
    total: Object.keys(kunci).length,
    pesan: `Skor kamu: ${benar} dari ${Object.keys(kunci).length}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
