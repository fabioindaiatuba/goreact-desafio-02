import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import IssueList from '../../components/IssueList';

import api from '../../services/api';

import { Container } from './style';

export default class Main extends Component {
  state = {
    repositories: [],
    issues: [],
    selectRepo: {},
    errorRepository: false,
    loadingRepository: false,
    loadingIssues: false,
    filterIssues: 'all',
  };

  addRepository = async (repo) => {
    this.setState({ loadingRepository: true, errorRepository: false });
    try {
      const response = await api.get(`repos/${repo}`);
      this.setState({
        repositories: [...this.state.repositories, response.data],
      });
    } catch (err) {
      this.setState({ errorRepository: true });
    } finally {
      this.setState({ loadingRepository: false });
    }
  };

  funcSelectRepository = (repo) => {
    this.funcListIssues(repo);
    this.setState({
      selectRepo: repo,
    });
  };

  funcListIssues = async (repo, filterState = 'all') => {
    this.setState({ loadingIssues: true });
    try {
      const response = await api.get(`repos/${repo.full_name}/issues?state=${filterState}`);
      this.setState({
        issues: response.data,
        filterIssues: filterState,
      });
    } finally {
      this.setState({ loadingIssues: false });
    }
  };

  render() {
    return (
      <Container>
        <Sidebar
          repositories={this.state.repositories}
          addRepository={this.addRepository}
          funcSelectRepository={this.funcSelectRepository}
          selectRepo={this.state.selectRepo}
          errorRepository={this.state.errorRepository}
          loadingRepository={this.state.loadingRepository}
        />
        <IssueList
          issues={this.state.issues}
          funcListIssues={this.funcListIssues}
          selectRepo={this.state.selectRepo}
          loadingIssues={this.state.loadingIssues}
          filterIssues={this.state.filterIssues}
        />
      </Container>
    );
  }
}
