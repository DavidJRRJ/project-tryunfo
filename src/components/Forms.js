import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            data-testid="name-input"
            name="name"
            id="name"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Primeiro Atributo:
          <input
            data-testid="attr1-input"
            name="attr1"
            id="attr1"
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          Segundo Atributo:
          <input
            data-testid="attr2-input"
            name="attr2"
            id="attr2"
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          Terceiro Atributo:
          <input
            data-testid="attr3-input"
            name="attr3"
            id="attr3"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            name="image"
            id="image"
            type="text"
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridade"
            name="raridade"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            id="superTrunfo"
            name="superTrunfo"
            type="checkbox"
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
