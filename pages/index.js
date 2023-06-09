import PizzaList from "@/components/PizzaList";
import Head from "next/head";

export default function Home({ pizzaList }) {
  console.log(pizzaList);
  return (
    <div>
      <Head>
        <title>Pizza Hut Abuja</title>
        <meta name="description" content="Best Pizza outlet in Abuja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList />
    </div>
  );
}
