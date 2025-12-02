const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();

// Allow CORS from frontend. Configure FRONTEND_URL in .env if needed.
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
	origin: FRONTEND_URL,
	methods: ['GET','POST','PUT','DELETE','OPTIONS'],
	allowedHeaders: ['Content-Type','Authorization']
}));

app.use(express.json());

// Connect DB
connectDB();

// ROUTES
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/plans", require("./routes/planRoutes"));
app.use("/trainers", require("./routes/trainerRoutes"));
app.use("/subscriptions", require("./routes/subscriptionRoutes"));
app.use("/payments", require("./routes/paymentRoutes"));
app.use("/attendance", require("./routes/attendanceRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
