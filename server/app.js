const express = require("express");
const bodyParser = require("body-parser");
const db = require("../models");
const app = express();
const port = 3001;

const jsonParser = bodyParser.json();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (_req, res) => {
  res.send("Hello World 3!");
});

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/contacts", (req, res) => {
  return db.Contact.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
      console.log("There was an error querying contacts", JSON.stringify(err));
      return res.send(err);
    });
});

app.post("/api/contacts", jsonParser, (req, res) => {
  const { email } = req.body;
  return db.Contact.create({ email })
    .then((contact) => res.send(contact))
    .catch((err) => {
      console.log(
        "***There was an error creating a contact",
        JSON.stringify(contact)
      );
      return res.status(400).send(err);
    });
});

app.delete("/api/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Contact.findById(id)
    .then((contact) => contact.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log("***Error deleting contact", JSON.stringify(err));
      res.status(400).send(err);
    });
});

app.put("/api/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Contact.findById(id).then((contact) => {
    const { firstName, lastName, phone } = req.body;
    return contact
      .update({ firstName, lastName, phone })
      .then(() => res.send(contact))
      .catch((err) => {
        console.log("***Error updating contact", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
