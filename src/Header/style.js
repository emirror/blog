import styled from 'styled-components';

export const Navigation = styled.menu`
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    max-width: 1300px;
    display:flex;
    justify-content: center;
    & li {
        list-style-type:none;

        & a {
            text-decoration:none;
            padding: 5px 10px;
            border:1px solid #FF6978;
            border-radius: 3px;
            color: #FF6978;
            background-size:100% 200%;
            background-image: linear-gradient(to bottom, transparent 50% , #FF6978 50%);
            transition: all .15s ease-in;

            &.active {
            color: #fff;
            background-color: #FF6978;
            }

            &:hover {
                color:#fff;
                background-position: 0% 100%;
                transition: all .15s ease-in;
            }
    }
        
    }
    & li:not(:first-of-type) {
        margin-left:10px;
    }
    `