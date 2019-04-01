import styled from 'styled-components'

import { spLayout } from '../Layout'
import { easeInOutBack } from '../easing'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: #24292e;
  color: #dddddd;
  flex-wrap: wrap;
  min-height: 50px;
  transition: all 0.3s ${easeInOutBack};

  h1 {
    font-weight: normal;
    margin: 0 20px;
    transition: all 0.3s ${easeInOutBack};
  }
  p {
    display: none;
    font-weight: lighter;
    transition: all 0.3s ${easeInOutBack};
  }

  &[data-is-expand='true'] {
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    min-height: 300px;
    h1 {
      font-size: 60px;
    }
    p {
      display: unset;
      font-size: 30px;
    }
    div {
      height: 40px;
    }

    ${spLayout(`
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 16px;
      }
    `)}
  }
`
