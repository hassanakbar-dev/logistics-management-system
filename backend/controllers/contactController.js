const db = require('../config/db');

exports.submitContactForm = (req, res) => {
  try {
    const { fullName, email, company, subject, message } = req.body;

    // Basic Validation Check
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing hain.'
      });
    }

    // SQL Query (Ensure column names match your MySQL database)
    const query = 'INSERT INTO contact_messages (fullName, email, company, subject, message) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [fullName, email, company, subject, message], (err, result) => {
      if (err) {
        console.error("Error saving message:", err);
        return res.status(500).json({
          success: false,
          message: 'Database mein error aa gaya: ' + err.message
        });
      }

      // Success Response
      return res.status(200).json({
        success: true,
        message: 'Message successfully save ho gaya!'
      });
    });

  } catch (error) {
    console.error("Server Catch Error:", error);
    return res.status(500).json({
      success: false,
      message: 'Server error occurred: ' + error.message
    });
  }
};