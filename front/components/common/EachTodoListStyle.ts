import styled from 'styled-components';
import { DefaultTheme, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const TodoLayout = styled.div`
  /* background-color: beige; */
  margin: 0 auto;
  padding: 0;
  font-size: 14px;

  .NoBorder{
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;

    input {
      margin: 0 auto;
      padding: 0;
      width: 200px;
      height: 30px;
      line-height: 30px;
      padding:3px;
    }

    button {
      height: 30px;
    }
    .showBox {
      display: flex;
      margin: 0 auto;
      padding:3px;
      font-size: 12px;
      
      > div {
        width: 200px;
      }
    }
    .updateBox{
      display: flex;
      >div{
        width:200px;
      }
    }
  }
`;

export default TodoLayout