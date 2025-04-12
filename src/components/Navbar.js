import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component
{
  constructor(props)
  {
     super(props);
     this.state={
      text:''
     };
  }
  handleOnChange=(event)=>{
    const value=event.target.value;
    this.setState({text:value});
    this.props.onSearch(value);
  };
  render()
  {
    return(
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">NewsWay</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
                <input className="form-control me-2" type="search"value={this.state.text} onChange={this.handleOnChange} placeholder="Search..." aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;