import React from "react";
import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    /* 색상 */
    ${({theme, color}) => {
    const selectedcolor = theme.palette[color];
    return css`
        background: ${selectedcolor};
        &:hover {
          background: ${lighten(0.1, selectedcolor)};
        }
        &:active {
          background: ${darken(0.1, selectedcolor)};
        }
        ${props => props.outline && css`
          color: ${selectedcolor};
          background: none;
          border: 1px solid ${selectedcolor};
          &:hover {
            background: ${selectedcolor};
            color: white;
          }  
         `}
       `;
    }}
`;

const sizes = {
    large:{
        height: '3rem',
        fontSize: '1.25rem',
        paddingTop: '0.75rem'
    },
    medium : {
        height: '2.25rem',
        fontSize: '1rem',
        paddingTop: '0.55rem',
    },
    small : {
        height: '1.75rem',
        fontSize: '0.875rem',
        paddingTop: '0.35rem',
    }
};


const sizeStyles = css`
  /* 크기 */
  ${({size}) => css `
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    padding-top: ${sizes[size].paddingTop};
  `}
`;

const fullWidthStyle = css`
  ${props => props.fullWidth && 
    css`
        width: 100%;
        justify-content: center;
        & + button {
          margin-left: 0;
          margin-top: 1rem;
        }
    `}
`;


const StyleButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  
  /* 기타 */
  & + button {
    margin-left: 1rem;
  }
  
  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
  
`;

function Button( {children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyleButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
            {children}
        </StyleButton>
    )
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button;