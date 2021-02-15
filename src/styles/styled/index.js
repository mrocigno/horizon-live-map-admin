import styled from 'styled-components';

export const ParallaxBody = styled.div`
    height: 100vh;
    width: 100%;
    overflow: scroll;
    perspective: 500px;
    perspective-origin: 50% 50%;
`;

export const ParallaxScene = styled.div`
    height: 50vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(14,141,167,1) 100%);
`;

export const ParallaxLayer = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background-position: bottom;
    background-size: contain;
    background-repeat: ${(p) => p && p.repeat? 'repeat-x' : 'no-repeat'};
    background-image: url('${(p) => p? p.url : ''}');
    transform: translateZ(${(p) => p? p.translateZ : 0}px);
`;