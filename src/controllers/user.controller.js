const User = require("../models/user");

// CREATE EMPLOYEE (OWNER ONLY)
exports.createEmployee = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const employee = await User.create({
      name,
      username,
      password,       // plain password (as decided)
      role: "EMPLOYEE"
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee: {
        id: employee._id,
        name: employee.name,
        username: employee.username
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create employee" });
  }
};

// GET ALL EMPLOYEES (OWNER ONLY)
exports.getEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "EMPLOYEE" })
      .select("-password"); // hide password

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};
