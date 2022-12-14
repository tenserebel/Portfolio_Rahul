import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contacts</h1>
      <h2>This is a new page</h2>
      <Link to="/contact" className="btn btn-primary">
        Contact
      </Link>
    </motion.div>
  );
};

export default Contact;
