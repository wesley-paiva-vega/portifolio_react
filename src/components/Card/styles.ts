import styled from "styled-components";
import { colors } from "../../theme";

export const Main = styled.div`
  width: 312px;
  border: 0.725px solid ${colors.dark_30};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16.5px 0 0 0;
  background-color: ${colors.dark_20};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
    scale: calc(1.02);
    transition: all ease-in-out 0.5s;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  width: 275px;
  flex-direction: column;
  margin-top: 10px;
`;

export const ImageProject = styled.div<{ $urlBackGround?: string }>`
  background-color: ${colors.dark_10};
  width: 275px;
  height: 100px;
  border: 0.725px solid ${colors.dark_30};

  background-image: ${({ $urlBackGround }) => `url(${$urlBackGround})`};
  background-position: center;
`;

export const Title = styled.span`
  font-size: 13.05px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
`;

export const SubTitle = styled(Title)`
  font-size: 10.15px;
  color: ${colors.dark_40};
  margin: 5px 0 15px 0;
`;
