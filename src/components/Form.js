import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            data-testid="name-input"
            name="cardName"
            id="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="arrt1">
          Primeiro Atributo:
          <input
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Segundo Atributo:
          <input
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Terceiro Atributo:
          <input
            data-testid="attr3-input"
            name="cardAttr3"
            id="attr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            name="cardImage"
            id="image"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
            id="rare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            id="trunfo"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
