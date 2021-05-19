import React, { Component } from "react";
import NavTabs from "./NavTabs";
import GraphicDesign from "./pages/GraphicDesign";
import Coding from "./pages/Coding";
import UXUI from "./pages/UXUI";
import Contact from "./pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "GraphicDesign"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    //conditional rendering
    if (this.state.currentPage === "GraphicDesign") {
      return <GraphicDesign />;
    } else if (this.state.currentPage === "Coding") {
      return <Coding />;
    } else if (this.state.currentPage === "UXUI") {
      return <UXUI />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
