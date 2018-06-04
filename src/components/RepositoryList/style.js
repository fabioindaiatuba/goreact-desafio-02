import styled from 'styled-components';

export const RepoList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  height: 100vh;
`;

export const ListItem = styled.li`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    padding: 10px;
  }

  section {
    flex: 1;
  }

  img {
    width: 45px;
    height: 45px;
  }
  h3,
  p {
    margin-left: 10px;
  }
  p {
    color: #999;
  }
  span {
    color: #999;
  }
  .selectRepo {
    background: #ddd;
  }
`;
