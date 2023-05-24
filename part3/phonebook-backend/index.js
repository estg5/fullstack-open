import express from "express";

const app = express();

let db = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/info", (req, res) => {
  const html = `<p>Phonebook has info for ${db.length} people</p>
    <p>${new Date()}</p>
    `;
  res.send(html);
});

app.get("/api/persons", (req, res) => res.json(db));

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = db.find((p) => p.id === id);

  if (!person) {
    res.status(404).end();
  }

  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  db = db.filter((p) => p.id !== id);

  res.status(204).end();
});

const PORT = 3002;
app.listen(PORT);
