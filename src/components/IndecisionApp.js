import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) { // or (this.state.options.includes(option))
      return 'This option already exist';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
      // or you can use the spread operator:
      // options: [...prevState.options, option]
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header
          subtitle={subtitle}
        />
        <div className="container">
          <Action
          hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
    </div>
    );
  }
}

