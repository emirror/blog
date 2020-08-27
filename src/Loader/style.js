import Styled from 'styled-components';

export const LoaderStyle = Styled.div`
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  top:200px;
  text-indent: -9999rem;
  border: 1rem solid #ccc;
  border-left-color: #FF6978;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: loader 1.1s infinite linear;
  animation: loader 1.1s infinite linear;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

    &:after {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    }
}

@-webkit-keyframes loader {
 0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

`