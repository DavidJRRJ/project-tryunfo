import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const max = 90;
    const min = 0;
    const total = 210;

    const notEmpty = cardName !== '' && cardDescription !== '' && cardImage !== '';

    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= total;

    const maxInputValue = Number(cardAttr1) <= max
      && Number(cardAttr2) <= max
      && Number(cardAttr3) <= max;

    const minInputValue = Number(cardAttr1) >= min
      && Number(cardAttr2) >= min
      && Number(cardAttr3) >= min;

    if (notEmpty && soma && maxInputValue && minInputValue) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    },
    () => this.setState({
      isSaveButtonDisabled: this.buttonDisabled(),
    }));
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState(({ cardList }) => ({
      cardList: [...cardList, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  }

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
      cardList,
      isSaveButtonDisabled,
    } = this.state;
    const trunfo = cardList.find((card) => card.cardTrunfo === true);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {cardList.map((c) => (
          <Card
            key={ c }
            cardName={ c.cardName }
            cardDescription={ c.cardDescription }
            cardAttr1={ c.cardAttr1 }
            cardAttr2={ c.cardAttr2 }
            cardAttr3={ c.cardAttr3 }
            cardImage={ c.cardImage }
            cardRare={ c.cardRare }
            cardTrunfo={ c.cardTrunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
