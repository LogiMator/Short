import { Category } from "./components/category/Category";
import { Container } from "./components/contain/Container"
import { Footer } from "./components/footer/footer";
import { Publi } from "./components/publi/Publi";

export default function Home() {
  return (
    <>
    <Container />
    <Category />
    <Publi />
    <Footer />
    </>
  );
}

