import Title from '@/components/ui/title/title';
import styled from 'styled-components';

export const Header = styled('header')`
  display: flex;
  gap: 16px;
`;

export const HeaderInner = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-grow: 1;
  padding-top: 80px;
`;

export const EmployeeName = styled(Title)`
  margin-bottom: 16px;
`;

export const EmployeeJobs = styled('div')`
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 8px;
  margin-bottom: 8px;

  &:empty {
    display: none;
  }
`;

export const Jobs = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  line-height: 18px;
  
  &:empty {
    display: none;
  }
`

export const EmployeePositions = styled('ol')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &:empty {
    display: none;
  }
`

export const EmployeePosition = styled('li')`
  background-color: #bbdefb;
  color: #1976d2;
  border-radius: 16px;
  display: inline-block;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;

  &:empty {
    display: none;
  }
`;
