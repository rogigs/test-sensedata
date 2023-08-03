import styled from "styled-components";
import media from "../../styledMedia";

export const Wrapper = styled.section`
  padding: 24px;
`;

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  width: 100%;

  ${media.greaterThan("mobileMax")`
    width: 420px;
    height: 500px

`}
`;

export const WrapperSectionForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  .player {
    max-height: 500px;
    max-width: 500px;
  }

  ${media.lessThan("mobileMax")`
  .player {
   display: none;
  }
`}
`;
