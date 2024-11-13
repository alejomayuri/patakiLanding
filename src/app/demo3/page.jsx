import Layout from "./pageLayout";
import MainBanner from "../components/PageDemo3/MainBanner/MainBanner";
import MidBanner from "../components/PageDemo3/MidBanner/MidBanner";
import CartaCerveza from "../components/PageDemo3/Carta/Carta";
import TextBanner from "../components/PageDemo3/TextBanner/TextBanner";
import FoodBanner from "../components/PageDemo3/FoodBanner/FoodBanner";
import Carrusel from "../components/PageDemo3/Carrusel/Carrusel";

export const Demo3 = () => {
  return (
    <Layout>
        <MainBanner />
        <MidBanner />
        <CartaCerveza />
        <TextBanner />
        <FoodBanner />
        <Carrusel />
    </Layout>
  );
}

export default Demo3;