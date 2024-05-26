import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import TrustedCustomers from "../components/home/TrustedCustomers";
import Subscribe from "../components/home/Subscribe";
import ProductPlan from "../components/home/ProductPlan";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      <TrustedCustomers />
      <ProductPlan />
      <Accordian />
      <Subscribe />
    </div>
  );
};

export default Home;
