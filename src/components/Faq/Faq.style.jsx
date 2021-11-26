import styled from 'styled-components';

export const Acordion = styled.main`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    transition: all 1s;
    border-radius: 10px;
  }
`;

export const BoxAcordion = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.color};
    padding: 1rem 2rem;
  }

  .content {
    max-height: 0;
    transition: all 0.25s cubic-bezier(0, 1, 0, 1);
    overflow: hidden;
    font-size: 1.5rem;
    padding: 0rem 2rem;

  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.25s cubic-bezier(1, 0, 1, 0);
    border-bottom: 1px solid ${(props) => props.theme.color};
    padding: 1rem 2rem;
  }
`;
