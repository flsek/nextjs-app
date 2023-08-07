import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/post";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Linda</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Linda Introduction]</p>
        <p>(This is website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
        {allPostsData.map(({ id, date, title }) => (
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={homeStyles.lightText}>{date}</small>
          </li>
        ))}
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
