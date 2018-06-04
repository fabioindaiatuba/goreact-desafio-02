import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 320px;
  background: #fff;
  padding: 30px;

  form {
    display: flex;
    border-bottom: 0.5px solid #eee;
    padding-bottom: 20px;

    input {
      flex: 1;
      height: 55px;
      padding: 0 20px;
      background: #eee;
      border: 0;
      font-size: 18px;
      border-radius: 3px;
    }

    .input_error {
      border: 1px solid #f00;
    }

    button {
      width: 80px;
      height: 55px;
      padding: 0 10px;
      margin-left: 10px;
      background: #59ea9a;
      color: #fff;
      border: 0;
      font-size: 20px;
      font-weight: bold;
      border-radius: 3px;

      &:hover {
        background: #19cc6a;
      }
    }
  }
`;
