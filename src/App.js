import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import EntrySection from "./components/EntrySection/EntrySection";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Form />
        <EntrySection />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
