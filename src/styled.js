import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    width: 100%;
    max-width: 1200px; 
    margin: 15px 0;
`

export const LeftCard = styled.div`
    display: flex;
    flex-flow: column;

    width: 350px;
    max-width: 95%;
`

export const RightCard = styled.div`
    display: flex;
    flex-flow: column;

    width: 600px;
    max-width: 95%;
`

export const InsideCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 100%;
    margin: 15px 0;

    background-color: #ddd;
    border-radius: 10px;
    box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.2);
`

export const CardTitle = styled.h1`
    width: 100%;
    margin: 10px 0;
    
    font-size: 22px;
    text-align: center;
`

export const CardPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: calc(100% - 30px);
    margin: 15px;
`

export const ResultCard = styled.div`
    max-width: 100%;
    width: ${props => props.Width+props.WidthUnit};
    height: ${props => props.Height+props.HeightUnit};

    border-top-left-radius: ${props => props.RadiusTopLeft+props.RadiusTopLeftUnit};
    border-top-right-radius: ${props => props.EadiusTopRight+props.EadiusTopRightUnit};
    border-bottom-left-radius: ${props => props.RadiusBottomLeft+props.RadiusBottomLeftUnit};
    border-bottom-right-radius: ${props => props.EadiusBottomRight+props.EadiusBottomRightUnit};

    background-color: ${props => props.Color};
`

export const ShowCss = styled.div`
    width: calc(90% - 40px);
    margin: 10px;
    padding: 10px;

    background-color: #eee;
    border-radius: 10px;
`

export const LineOption = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    
    width: 90%;
    margin: 5px 0;
`

export const LineTitle = styled.span`
    width: 40%;
    font-weight: bold;
`

export const LineContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;

    width: 50%;
`

export const Input = styled.input`
    width: 50%;
    height: 20px;

    background: none;
    border: none;
    outline: none;

    border-bottom: 1px solid #000;
`