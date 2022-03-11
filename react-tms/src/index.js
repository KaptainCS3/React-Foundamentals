import React from "react";
import ReactDom from "react-dom";
//import CSS
import "./index.css";
function AppComponent() {
  return (
    <heading>
      {/* <Hero />
      <Des /> */}
      <Bookshell />
      <Bookshell2 />
      <Bookshell3 />
      <Bookshell4 />
    </heading>
  );
}
const Bookshell = () => {
  return (
    <article className="content">
      <div className="book">
        <div className="img">
          <img
            src="https://image.ebooks.com/previews/210/210417/210417291/210417291-hq-168-80.jpg"
            alt=""
          />
        </div>
        <h1>Good Science</h1>
        <h2>Joshua W. Clegg</h2>
        <p>
          Good Science is an account of psychological research emphasizing the
          moral foundations of inquiry. This volume brings together existing
          disciplinary critiques of scientism, objectivism, and instrumentalism,
          and then discusses how these contribute to institutionalized privilege
          and to less morally responsive research practices. The author draws on
          historical, critical, feminist, and science studies traditions to
          provide an alternative account of psychological science and to
          highlight the irreducibly moral foundations of everyday scientific
          practice. This work outlines a theoretical framework for thinking
          about and practicing psychology in ways that center moral
          responsibility, collective commitment, and justice. The book then
          applies this framework, describing psychological research practices in
          terms of the their moral dilemmas. Also included are materials meant
          to aid in methods instruction and mentoring.
        </p>
      </div>
    </article>
  );
};

const Bookshell2 = () => {
  return (
    <article className="content">

       <div className="book">
         <div className="img">
      <img
        src="https://image.ebooks.com/previews/210/210435/210435342/210435342-hq-168-80.jpg"
        alt=""
      />
      </div>
      <h1>The Little Book of Mathematical Principles, Theories & Things</h1>
      <h2>Robert Solomon</h2>
      <p>
        This little book makes serious math simple—with more than 120 laws,
        theorems, paradoxes, and more explained in jargon-free terms. The Little
        Book of Mathematical Principles provides simple, clear explanations for
        the principles, equations, paradoxes, laws, and theorems that form the
        basis of modern mathematics. It is a refreshingly engaging tour of
        Fibonacci numbers, Euclid's Elements, and Zeno's paradoxes, as well as
        other fundamental principles such as chaos theory, game theory, and the
        game of life. Renowned mathematics author Dr. Robert Solomon simplifies
        the ancient discipline of mathematics and provides fascinating answers
        to intriguing questions, such as: What is the greatest pyramid?, What is
        a perfect number?, and Is there a theory for stacking oranges?
      </p>
      </div>
    </article>
  );
};

const Bookshell3 = () => {
  return (
    <article className="content">
      <div className="book">
        <div className="img">
          <img
            src="https://image.ebooks.com/previews/210/210071/210071682/210071682-hq-168-80.jpg"
            alt=""
          />
        </div>
        <h1>Naked Statistics: Stripping the Dread from the Data</h1>
        <h2>Charles Wheelan</h2>
        <p>
          A New York Times bestseller "Brilliant, funny…the best math teacher
          you never had." —San Francisco Chronicle Once considered tedious, the
          field of statistics is rapidly evolving into a discipline Hal Varian,
          chief economist at Google, has actually called "sexy." From batting
          averages and political polls to game shows and medical research, the
          real-world application of statistics continues to grow by leaps and
          bounds. How can we catch schools that cheat on standardized tests? How
          does Netflix know which movies you’ll like? What is causing the rising
          incidence of autism? As best-selling author Charles Wheelan shows us
          in Naked Statistics, the right data and a few well-chosen statistical
          tools can help us answer these questions and more. For those who slept
          through Stats 101, this book is a lifesaver. Wheelan strips away the
          arcane and technical details and focuses on the underlying intuition
          that drives statistical analysis. He clarifies key concepts such as
          inference, correlation, and regression analysis, reveals how biased or
          careless parties can manipulate or misrepresent data, and shows us how
          brilliant and creative researchers are exploiting the valuable data
          from natural experiments to tackle thorny questions. And in Wheelan’s
          trademark style, there’s not a dull page in sight. You’ll encounter
          clever Schlitz Beer marketers leveraging basic probability, an
          International Sausage Festival illuminating the tenets of the central
          limit theorem, and a head-scratching choice from the famous game show
          Let’s Make a Deal—and you’ll come away with insights each time. With
          the wit, accessibility, and sheer fun that turned Naked Economics into
          a bestseller, Wheelan defies the odds yet again by bringing another
          essential, formerly unglamorous discipline to life.
        </p>
      </div>
    </article>
  );
};

const Bookshell4 = () => {
  return (
    <article className="content">
      <div className="book">
        <div className="img">
          <img
            src="https://image.ebooks.com/previews/209/209932/209932376/209932376-sml-1.jpg"
            alt=""
          />
          </div>
          <h1>Information Security Management Principles (3rd ed.)</h1>
          <h2>Andy Taylor, David Alexander</h2>
          <p>
            BCS Learning & Development Limited (2020) This book is a pragmatic
            guide to information assurance for both business professionals and
            technical experts. The third edition has been updated to reflect
            changes in the IT security landscape and updates to the BCS
            Certification in Information Security Management Principles, which
            the book supports.
          </p>
        </div>
    </article>
  );
};

const Hero = () => <h1>TMS</h1>;

const Des = () => {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi aut
        exercitationem non, ut quisquam quia fuga illum dolorum, enim alias qui
        repellat libero! Nostrum accusamus quas optio quasi adipisci eum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in porro
        sint, voluptatem cumque aut dolorum vitae deleniti non natus incidunt,
        aperiam dolor quos! Voluptas ex dolorem itaque, sunt dicta molestiae
        numquam deleniti praesentium nemo rem asperiores enim illo iure dolores?
        Saepe, eaque aspernatur quasi, voluptas harum quidem nam corporis nemo
        odit blanditiis fuga eos accusantium voluptates ipsa hic obcaecati!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        accusantium reiciendis velit, eum quibusdam est voluptatem molestias
        alias officia voluptate laborum quae corporis consequuntur maiores
        labore ad beatae ipsa consectetur sint! Quae et beatae ipsum asperiores
        ullam harum reiciendis sint quidem, odit soluta consequatur sunt
        nesciunt quod pariatur est repellendus laborum assumenda architecto
        voluptatem! Consectetur, id. Quidem in consectetur fugiat, similique
        voluptates consequatur alias aliquid delectus veniam? Excepturi, quo
        voluptatem? In quia, blanditiis laudantium totam maiores, repellat
        officia inventore vero temporibus molestiae eius ullam iste vitae, quo
        voluptates sint praesentium voluptate ipsam! Maiores cum, pariatur
        voluptatum dignissimos dolorem ratione quaerat sapiente saepe aperiam
        nisi nesciunt in! Ratione, deserunt sit reiciendis iste incidunt
        asperiores. Esse eligendi, architecto excepturi iure non omnis!
      </p>
    </section>
  );
};

ReactDom.render(<AppComponent />, document.getElementById("root"));
