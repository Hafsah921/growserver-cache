import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ serve your files directly
app.use('/growtopia', express.static(path.join(process.cwd(), 'public/growtopia')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});