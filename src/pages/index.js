import React from "react";
import Layout from "../components/Layout";

export default function index() {
  return (
    <div>
      <Layout>
        <section>
          <h1>HEADER</h1>
          <h1 style={{ marginTop: "900vh" }}>BLOG</h1>
          <h1>PROJECTS</h1>
          <p>Android App Development</p>
          <h1>DESIGNS</h1>
          <h1>CONTACTS</h1>
        </section>
      </Layout>
    </div>
  );
}
