import { Component } from "react";
import Contact from "./Contact";
import "../App.css";

class Notebook extends Component<any> {
  state = {
    contatos: [
      {
        nome: "Meiry",
        numero: "(00) 0000-0000",
      },
      {
        nome: "Jeniffer",
        numero: "(11) 1111-1111",
      },
      {
        nome: "Lara",
        numero: "(22) 2222-2222",
      },
      {
        nome: "Priscilla",
        numero: "(33) 3333-3333",
      },
      {
        nome: "Patricia",
        numero: "(44) 4444-4444",
      },
      {
        nome: "Beatriz",
        numero: "(55) 5555-5555",
      },
      {
        nome: "Ana",
        numero: "(66) 6666-6666",
      },
      {
        nome: "Camila",
        numero: "(77) 7777-7777",
      },
      {
        nome: "Karina",
        numero: "(88) 8888-8888",
      },
      {
        nome: "Aline",
        numero: "(99) 9999-9999",
      },
      {
        nome: "Virginia",
        numero: "(10) 1010-1010",
      },
      {
        nome: "Dandariene",
        numero: "(12) 1212-1212",
      },
    ],
    showContact: false,
  };

  renderContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  render() {
    return (
      <div>
        <h1 className="title">
          <span className="span-title">Women</span> Tech Talents
        </h1>
        <h2 className="subtitle">
          Precisando de uma rede de apoio tech e para vida?
        </h2>
        <button className="button-show" onClick={this.renderContact}>
          Chama elas
        </button>
        <div>
          {this.state.showContact && (
            <ul className="list">
              {this.state.contatos.map((item, i) => (
                <Contact key={i} nome={item.nome} numero={item.numero} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Notebook;
