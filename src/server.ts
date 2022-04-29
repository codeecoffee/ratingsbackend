import express from 'express';
import { router } './routes/routes';

const PORT = 3000
const app = express()
app.use(express.json())
app.use(Router)

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))