import styled from 'styled-components';

export const IMCTableWrapper = styled.div`
`;

export const IMCTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th:not(:empty) {
    background-color: #f0f0f0;
    font-size: 0.67rem;
    padding: 0.5rem;
    text-align: center;
  }
  td {
    padding: 0.5rem;
    font-size: 0.62rem;
    text-align: center;
    &.yellow {
      background-color: #f5bb21;
    }
    &.green {
      background-color: #00ea29;
    }
    &.beige {
      background-color: #fbe882;
    }
    &.red {
      background-color: #f1423c;
    }
    &.pink {
      background-color: #ec418c;
    }
  }
  thead tr {
  }
`;