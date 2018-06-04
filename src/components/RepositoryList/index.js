import React from 'react';
import PropTypes from 'prop-types';

import { RepoList, ListItem } from './style';

const RepositoryList = ({ repositories, funcSelectRepository, selectRepo }) => (
  <RepoList>
    {repositories.map(repository => (
      <ListItem key={repository.id} onClick={() => funcSelectRepository(repository)}>
        <div className={repository.id === selectRepo.id ? 'selectRepo' : ''}>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <section>
            <h3>{repository.name}</h3>
            <p>{repository.owner.login}</p>
          </section>
          <span>
            <i className="fa fa-chevron-right" />
          </span>
        </div>
      </ListItem>
    ))}
  </RepoList>
);

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  })).isRequired,
  funcSelectRepository: PropTypes.func.isRequired,
  selectRepo: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default RepositoryList;
