const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Arithmetic API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Addition: a + b
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = a + b;
    console.log(result);
    res.json({ step1: `Start with ${a} and ${b}`, step2: `Add ${a} + ${b}`, result });
  });
  
  // Subtraction: a - b
  app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.json({ step1: `Start with ${a} and ${b}`, step2: `Subtract ${b} from ${a}`, result });
  });
  
  // Multiplication: a * b
  app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.json({ step1: `Start with ${a} and ${b}`, step2: `Multiply ${a} * ${b}`, result });
  });
  
  // Division: a / b
  app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
      return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = a / b;
    res.json({ step1: `Start with ${a} and ${b}`, step2: `Divide ${a} by ${b}`, result });
  });
  