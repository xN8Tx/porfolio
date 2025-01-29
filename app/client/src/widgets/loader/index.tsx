import "./index.scss";

const Loader = () => {
  return (
    <section className="loader" id="loader" data-isactive="false">
      <div className="loader__wrapper">
        <div className="loader__icon"></div>
        <div className="loader__bar">
          <div className="loader__bar_item"></div>
        </div>
      </div>
    </section>
  );
};

export { Loader };
