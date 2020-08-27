import style from 'styled-components';

export const BlogListStyle = style.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;


    & > div {
        display: grid;
        padding: 1rem;
        background-color: #f2f2f2;
        border-radius: 8px;
        & a {
            align-self: end;
            width: 70%;
            justify-self: center;
            text-align: center;
            text-decoration: none;
            background-color: #31caff;
            color: #fff;
            padding: 0.4rem 0;
            border-radius: 50px;
            }
    }
`