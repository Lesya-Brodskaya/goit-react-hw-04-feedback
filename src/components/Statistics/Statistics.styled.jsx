import styled from '@emotion/styled';

export const List = styled.ul`
  background-color: rgba(164, 178, 232, 0.721);
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: crnter;
  align-item: center;
`;

export const Item = styled.li`
  list-style: none;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 200;

  :last-child {
    margin-bottom: 0px;
  }
`;
