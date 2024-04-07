const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Import project routes
const projectRoutes = require('./routes/projectRoutes')

app.get('/', (req, res) => {
    res.send('DIY Project Hub 🧵🛠️🎨')
})

// Use the projectRoutes for the /projects path
app.use('/projects', projectRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
