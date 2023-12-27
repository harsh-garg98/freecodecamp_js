import "./App.css";

function App() {
  return (
    <main>
      <section className="container">
        {/* title */}
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        {/* review */}
        <article className="review">
          <div className="img-container">
            <img src="../public/review3.jpeg" id="person-img" alt="" />
            <div className="circle"></div>
          </div>
          <h4 id="author">Random Name</h4>
          <p id="job">ux designer</p>
          <p id="info">
            Lorem ipsum yada yada jai hanuman gyan gun saagar jai kapish dehulok
            ujaagar ram doot atulit bal dhama anajani shree patikanth lagaawa
          </p>
          <div className="button-container">
            <button id="prev-btn" className="navigation-btn">
              P
            </button>
            <button id="next-btn" className="navigation-btn">
              N
            </button>
          </div>
          <button className="random-btn">Surprise Me</button>
        </article>
      </section>
    </main>
  );
}

export default App;
