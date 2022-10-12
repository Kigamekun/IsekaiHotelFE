function Modal({ closeModal, data }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="btn btn--close" onClick={() => closeModal()}>
          X
        </button>
        <div className="modal__body">
          <h1 className="modal__title">
            {data.name} {data.color}
          </h1>
          <h2 className="modal__subtitle">Having a website in 2021 is essential.</h2>
          <ul>
            <span>How I will help you :</span>
            <li>Discover together your goals through a strategy session</li>
            <li>Discuss about the possible solutions to implement</li>
            <li>A glorious online presence a.k.a. website</li>
          </ul>
        </div>
        <div className="modal__footer">
          <p>Wanna put your business out there ?</p>
          <button className="btn btn--main">{data.name}</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [modal, setModal] = useState({ show: false, data: null });

  const openAudi = () => {
    setModal({ show: true, data: { name: 'Audi', color: 'red' } });
  };

  const openBMW = () => {
    setModal({ show: true, data: { name: 'BMW', color: 'blue' } });
  };

  const handleClose = () => {
    setModal({ show: false, data: null });
  };

  return (
    <div className="main">
      <button className="solidText" onClick={openAudi}>
        Button Audi
      </button>
      <button className="solidText" onClick={openBMW}>
        Button BMW
      </button>
      {modal.show && modal.data && <Modal closeModal={handleClose} data={modal.data} />}
    </div>
  );
}