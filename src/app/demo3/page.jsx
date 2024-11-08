import Layout from "./pageLayout";
import MainBanner from "../components/PageDemo3/MainBanner/MainBanner";
import MidBanner from "../components/PageDemo3/MidBanner/MidBanner";
import CartaCerveza from "../components/PageDemo3/Carta/Carta";
import TextBanner from "../components/PageDemo3/TextBanner/TextBanner";

export const Demo3 = () => {
  return (
    <Layout>
        <MainBanner />
        <MidBanner />
        <CartaCerveza />
        <TextBanner />
        <section> </section>
    </Layout>
  );
}

export default Demo3;