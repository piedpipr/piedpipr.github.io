import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Disqus } from "gatsby-plugin-disqus";
import Dump from "../components/Dump";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Layout } from '../components/Layout';

export default ({ data, pageContext }) => {
  const { frontmatter, body, id, slug } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <section>
      {/* Navbar Start */}
      <div className="myLogo">
        <div className="logoText" onClick={(event) => (window.location = "/")}>
          <h1 style={{ fontWeight: 600, fontSize: "2rem" }}>
            protik
            <a style={{ fontWeight: 100 }}>
              chanda<span className="blink">_</span>
            </a>
          </h1>
        </div>
        {/* Social Links */}
        <div className="navbarContact">
          <Link
            className="linkStyle"
            to="https://www.linkedin.com/in/protikchanda"
          >
            <FaLinkedin style={{ height: "2em", width: "2em" }} />
          </Link>
          {/* <Link className="linkStyle" to="#recentPosts">
            <FaTwitterSquare style={{ height: "2em", width: "2em" }} />
          </Link> */}
          <Link className="linkStyle" to="https://github.com/piedpipr">
            <FaGithubSquare style={{ height: "2em", width: "2em" }} />
          </Link>
        </div>
      </div>
      {/* Navbar End */}
      {/* Dump for testing purpose */}
      {/* <Dump previous={previous} />
      <Dump next={next} /> */}
      <h1
        style={{
          paddingBottom: "1vh",
          paddingTop: "3vh",
          textAlign: "center",
          fontSize: "2.5em !important",
          fontFamily: "Apercu, sans-serif !important",
          fontWeight: "900 !important",
        }}
      >
        {frontmatter.title}
      </h1>
      <p
        style={{
          paddingBottom: "13vh",
          paddingTop: "1vh",
          textAlign: "center",
          fontSize: "1.3em !important",
          fontFamily: "Apercu, sans-serif !important",
          fontWeight: "100 !important",
        }}
      >
        Published on {frontmatter.date} by Protik Chanda
      </p>
      <div
        className="container-fluid d-flex justify-content-center p-5 bg-light"
        style={{
          height: "100vh",
          minWidth: "100vw",
          color: "#333333",
        }}
      >
        <div style={{ maxWidth: "75vw", marginTop: "5vh", textAlign: "left" }}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug}>
                  <p className="badge bg-secondary bg-gradient text-wrap">
                    {"Previous Post: " + previous.frontmatter.title}
                  </p>
                </Link>
              )}
            </>
          )}
        </div>
        <div>
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug}>
                  <p className="badge bg-secondary bg-gradient text-wrap">
                    {"Next Post: " + next.frontmatter.title}
                  </p>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Disqus
          config={{
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: `https://protik.me/blog/${slug}`,
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: id,
            /* Replace PAGE_TITLE with the title of the page */
            title: frontmatter.title,
          }}
          style={{ width: "80vw" }}
        />
      </div>
    </section>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      slug
      id
    }
  }
`;
