import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
const Contact = () => {
  return (
    <Layout>
      <div>
        <h1>Contacts</h1>
        <h2>This is a new page</h2>
        <Link to="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </Layout>
  );
};

export default Contact;
