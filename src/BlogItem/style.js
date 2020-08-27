import headerStyled from 'styled-components';

export const SinglePost = headerStyled.div`
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    display: block;
    & .prev-next {
        display:flex;
        justify-content: space-around;

        & a {
            text-decoration: none;
            padding: .5rem;
            border: 1px solid #31caff;
            border-radius: 3px;
            color: #fff;
            background: #31caff;

            &.view-all {
                color: #31caff;
            background: #fff;
            }
        }
    }
`