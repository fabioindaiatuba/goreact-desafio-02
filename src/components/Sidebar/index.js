import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

import RepositoryList from '../RepositoryList';

export default class Sidebar extends Component {
  static propTypes = {
    addRepository: PropTypes.func.isRequired,
    funcSelectRepository: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    selectRepo: PropTypes.shape().isRequired,
    errorRepository: PropTypes.bool.isRequired,
    loadingRepository: PropTypes.bool.isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.props.addRepository(this.state.repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <Container>
        <form onSubmit={e => this.handleAddRepository(e)}>
          <input
            className={this.props.errorRepository ? 'input_error' : ''}
            type="text"
            placeholder="Novo repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.props.loadingRepository ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </form>

        <RepositoryList
          repositories={this.props.repositories}
          funcSelectRepository={this.props.funcSelectRepository}
          selectRepo={this.props.selectRepo}
        />
      </Container>
    );
  }
}
