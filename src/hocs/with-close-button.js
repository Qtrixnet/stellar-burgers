import React from 'react';

function withCloseButton(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
      this.state = {
        isOpen: this.props.initialOpenState,
      }
    }

    onCloseButtonClick() {
      this.setState({
        isOpen: this.props.popupCloseHandler(false),
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onCloseButtonClick={this.onCloseButtonClick}
          isOpen={this.props.initialOpenState}
        />
      )
    }
  }
};

export default withCloseButton;