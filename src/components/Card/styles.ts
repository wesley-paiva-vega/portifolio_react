import styled from "styled-components";
import { colors } from "../../theme";

export const Main = styled.div`
  width: 312px;
  height: 174px;
  border: 0.725px solid ${colors.dark_40};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 0 0;
`;

export const ImageProject = styled.div`
  background-color: ${colors.dark_20};
  width: 275px;
  height: 100px;
  margin-bottom: 8px;
`;

export const Title = styled.text`
  font-family: DM Sans;
  font-size: 13.05px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubTitle = styled(Title)`
  font-size: 8px;
`;

export const FooterCard = styled.div`
  display: flex;
  width: 275px;
  gap: 10px;
  flex-direction: column;
`;
