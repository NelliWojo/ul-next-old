import LinkA from "./LinkA";
import Head from "next/head";

const Layout = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, " + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div>
        <LinkA href={"/"} text="Main Page"></LinkA>
        <LinkA href={"/users"} text="Users Page"></LinkA>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
