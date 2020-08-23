import styled from 'styled-components';

export const Navigation = styled.ul`
    display:flex;
    justify-content: center;
    & li {
        list-style-type:none;

        & a {
            text-decoration:none;
            padding: 5px 10px;
            border:1px solid #31caff;
            border-radius: 3px;
            color: #31caff;
            &.active {
            color: #fff;
            background-color: #31caff;
        }
    }
        
    }
    & li:not(:first-of-type) {
        margin-left:10px;
    }
    `