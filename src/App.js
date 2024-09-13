import './App.css';

function App() {
  return (
    <div className="card">
        <div className="card-image">	
          <h2 className="card-heading">
            Get started
            <small>Let us your Rate for stuff</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input type="text" className="input-field" required/>
            <label className="input-label">Stuff name</label>
          </div>
          <div className="input">
            <input type="number" className="input-field" required/>
            <label className="input-label">Quantity</label>
          </div>
          <div className="input">
            <select className="input-field" style={{color: "#8597a3"}} required>
              <option style={{color: "black"}} value="/">Condition</option>
              <option style={{color: "black"}} value="excellent">excellent</option>
              <option style={{color: "black"}} value="good">good</option>
              <option style={{color: "black"}} value="fair">fair</option>
              <option style={{color: "black"}} value="poor">poor</option>
            </select>
          </div>
          <div className="action">
            <button className="action-button">Get started</button>
          </div>
        </form>
	</div>
  );
}

export default App;
