import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactText = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ContactNumber = styled.span`
  font-weight: 200;
  font-size: 26px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 10px;

  svg {
    pointer-events: none;
  }
`;
