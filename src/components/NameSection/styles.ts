import { styled } from "styled-components";
import { colors } from "../../theme/colors";

export const NameSectionMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${colors.dark_50};
    gap: 10px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    h3 {
        font-size: 16px;
        color: ${colors.dark_40};
        padding: 0;
        margin: 0;
    }
`;