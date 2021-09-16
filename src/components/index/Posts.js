import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GetPostsOrdByDate } from "../../hooks/GetPostsOrdByDate";
import "../../styles/postcard.css";
import Dump from "../Dump";

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;
const PostWrapperMain = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: #e7f4fa;
  border: 1em solid #fff;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  max-width: 76.5em;
  margin: 0 auto;
  padding: 4em 5%;

  > * {
    padding: 0.5em;
    flex-basis: 100%;
    max-width: 100%;
  }
  @media (min-width: 54em) {
    > * {
      flex-basis: 33.3333333333%;
      max-width: 33.3333333333%;
    }
  }
`;
const Post = styled.div`
  align-self: flex-start;
`;
const CardMdBackGroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("https://source.unsplash.com/56wK2w3sMOo/800x450");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
const PostLink = styled.a`
  display: block;
  width: 100%;
  color: #000;
  border-radius: 5px;
  overflow: hidden;
`;
const CardImgBgPosition = styled.div`
  position: relative;
  height: 15em;
  background-color: #a9a9a9;
`;
const CardTextContainer = styled.div`
  padding: 2em;
  background-color: #fff;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostDate = styled.div`
  font-size: 0.8em;
  font-weight: 700;
  color: #a9a9a9;
`;
const ReadMore = styled.div`
  display: block;
  font-size: 0.8em;
  font-weight: 700;
  color: #80eca9;
`;
export default function Posts() {
  const posts = GetPostsOrdByDate();

  return (
    <div className="blogSection" id="recentPosts">
      <div>
        <h1>Recent Posts</h1>
        <Dump test={posts} />
        <PostWrapperMain>
          <CardContainer>
            {posts.map(({ id, excerpt, frontmatter, fields }) => (
              <Post key={id}>
                <PostLink href={"blog" + fields.slug}>
                  <CardImgBgPosition>
                    <CardMdBackGroundImg
                      style={{
                        backgroundImage: `url('https://source.unsplash.com/56wK2w3sMOo/800x450')`,
                      }}
                    />
                  </CardImgBgPosition>
                  <CardTextContainer>
                    <h2>{frontmatter.title}</h2>
                    <CardFooter>
                      <PostDate>{frontmatter.date}</PostDate>
                      <ReadMore>Read more</ReadMore>
                    </CardFooter>
                  </CardTextContainer>
                </PostLink>
              </Post>
            ))}
          </CardContainer>
        </PostWrapperMain>

        <IndexWrapper>
          {posts.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={"blog" + fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
      </div>
    </div>
  );
}
