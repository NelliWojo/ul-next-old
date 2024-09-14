import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const DetailsPage = ({ user }) => {
  //   const router = useRouter();
  //   console.log(router);

  const { query } = useRouter();

  return (
    <Layout keywords={user.name} title="Details Page">
      <h1>User with id {query.id}</h1>
      <div>User name - {user.name}</div>
    </Layout>
  );
};

export default DetailsPage;

// export async function getServerSideProps(context) {
export async function getServerSideProps({ params }) {
  //   console.log(context);
  console.log(params);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
