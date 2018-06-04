import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background: #fff;
  padding: 0 35px;
  align-items: center;

  select {
    height: 42px;
    border: 1px solid #ddd;
    padding: 0 35px;
    color: #999;
    border-radius: 5px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;

    margin-top: 20px;
  }
  article {
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
  div {
    align-self: center;
    padding-left: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Issue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 25%;
  background: #fff;
  padding: 20px;
  margin: 20px;

  img {
    max-width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-left: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 75%;

    h2 {
      font-size: 0.9em;
      font-weight: bold;
      margin: 5px 0 0 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      font-size: 0.8em;
      color: #999;
      margin: 5px 0 0 5px;
    }

    a {
      border: none;
      padding: 5px 20px;
      background-color: #b286d1;
      margin: 5px 0 0 5px;
      color: #fff;
      border-radius: 3px;
      text-decoration: none;
      font-size: 0.8em;
      max-width: 71px;
    }
  }
`;
