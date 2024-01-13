import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height:105px;
  width:100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;


`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img{
    width:56px;
    height: 56px;
    border-radius: 50%;
  }

  >div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;

    }

    strong{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 18px;
      font-weight: 700;
    }

  }
`;

export const Logout = styled.button`

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 36px;

`;