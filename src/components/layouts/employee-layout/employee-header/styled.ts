import styled from 'styled-components';
import Title from '../../../ui/title/title';

export const StyledHeader = styled('header')`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const HeaderInner = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-grow: 1;
  min-height: 88px;
`;

export const Name = styled(Title)`
  margin-bottom: 16px;
`;

export const Jobs = styled('div')`
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #476887;
  margin-bottom: 8px;
`;

export const Positions = styled('div')`
  background-color: #CCE6FF;
  color: #006CFF;
  border-radius: 20px;
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 80%;

  &:empty {
    display: none;
  }
`;
