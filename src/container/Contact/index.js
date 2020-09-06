import React from "react";
import ContactUs from "../../components/Contact";
import "./index.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <ContactUs />
      </div>
    );
  }
}
export default Contact;
