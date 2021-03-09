import { Component } from "react";
import "../App.css";

export interface NotebookProps {
  nome: string;
  numero: string;
}

class Contact extends Component<NotebookProps> {
  render() {
    return (
      <li className="list">
        <span className="list-name">{this.props?.nome}</span> -{" "}
        {this.props?.numero}
      </li>
    );
  }
}

export default Contact;
