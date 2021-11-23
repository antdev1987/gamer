import styled from 'styled-components';

export const Acordion = styled.main`
  margin-top: 3rem;
  border: 1px solid red;
  display: flex;
  height: 30rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    border: 1px solid ${props => props.theme.color};
    transition: all 1s;
    border-radius: 10px;
  }
`;

export const BoxAcordion = styled.div`
  width: 80rem;
  padding: 1rem 2rem;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 2.5rem;
  }

  .content {
    max-height: 0;
    transition: all 0.25s cubic-bezier(0,1,0,1);
    overflow: hidden;
    font-size: 1.4rem;
  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.25s cubic-bezier(1,0,1,0);

  }
`;
