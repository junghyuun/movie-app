import React from "react";
import "./Detail.css";

class Detail extends React.Component{
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
              <div className="detail__container">
                <div className="detail__data">
                  <h3 className="movie__title">{location.state.title}</h3>
                  <h5 className="movie__year">{location.state.year}</h5>
                  <p className="movie__summary">{location.state.summary}</p>
                </div>
              </div>
             );
    } else {
      return null;
    }
  }
}

export default Detail;