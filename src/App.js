import Game from './components/Game/Game';
import Modal from './components/Modal';
import * as operations from './redux/operations';
// import Board from './components/Board/Board';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as selector from './redux/selector';

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <Game />
        </div>
        <Modal toggleModal={this.props.toggleModal} />
        {/* {this.props.modal && (<Modal toggleModal={this.props.toggleModal} />)} */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: selector.isModalOpen(state),
})

const mapDispatchToProps = {
  toggleModal: operations.toggleModal,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
