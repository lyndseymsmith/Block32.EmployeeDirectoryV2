import express from "express";
import { getEmployees, addEmployee } from "../db/employees.js";

const router = express.Router();

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).send("Name is required!");
  }
  const newEmployee = addEmployee({ name });
  res.status(201).json({ message: `Added employee ${newEmployee.name}` });
});

export default router;
