import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, ListItem, Content, Issue } from './style';

const IssueList = ({
  issues, selectRepo, loadingIssues, funcListIssues, filterIssues,
}) => (
  <Container>
    <Header>
      {selectRepo.id ? (
        <ListItem>
          <img src={selectRepo.owner.avatar_url} alt={selectRepo.owner.login} />
          <article>
            <h3>{selectRepo.name}</h3>
            <p>{selectRepo.owner.login}</p>
          </article>
          <div>{loadingIssues ? <i className="fa fa-spinner fa-pulse fa-2x" /> : ''}</div>
        </ListItem>
      ) : (
        <div />
      )}
      <select onChange={e => funcListIssues(selectRepo, e.target.value)} value={filterIssues}>
        <option value="all">Todas</option>
        <option value="open">Abertas</option>
        <option value="closed">Fechadas</option>
      </select>
    </Header>
    <Content>
      {issues.map(issue => (
        <Issue key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
          <div>
            <h2>{issue.title}</h2>
            <p>{issue.user.login}</p>
            <a href={issue.html_url} target="blank">
              <i className="fa fa-external-link" />ABRIR ISSUE
            </a>
          </div>
        </Issue>
      ))}
    </Content>
  </Container>
);

IssueList.propTypes = {
  funcListIssues: PropTypes.func.isRequired,
  filterIssues: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  })).isRequired,
  selectRepo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  loadingIssues: PropTypes.bool.isRequired,
};

export default IssueList;
