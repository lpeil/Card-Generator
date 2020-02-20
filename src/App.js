import React, { useState } from 'react';

import {
    Wrapper,
    LeftCard,
    RightCard,
    InsideCard,
    ResultCard,
    CardPreview,
    ShowCss,
    CardTitle,
    LineOption,
    LineTitle,
    LineContent,
    Input
} from './styled';

const App = () => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [color, setColor] = useState("#000");
    const [radiusTopLeft, setRadiusTopLeft] = useState(0);
    const [radiusTopRight, setRadiusTopRight] = useState(0);
    const [radiusBottomLeft, setRadiusBottomLeft] = useState(0);
    const [radiusBottomRight, setRadiusBottomRight] = useState(0);

    const [widthUnit, setWidthUnit] = useState('px');
    const [heightUnit, setHeightUnit] = useState('px');
    const [radiusTopLeftUnit, setRadiusTopLeftUnit] = useState('px');
    const [radiusTopRightUnit, setRadiusTopRightUnit] = useState('px');
    const [radiusBottomLeftUnit, setRadiusBottomLeftUnit] = useState('px');
    const [radiusBottomRightUnit, setRadiusBottomRightUnit] = useState('px');

    const optionsFull = () => {
        return (<>
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="vw">vw</option>
            <option value="vh">vh</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
        </>)
    };

    const optionsTwo = () => {
        return (<>
            <option value="px">px</option>
            <option value="%">%</option>
        </>)
    };

    return (
        <Wrapper>
            <LeftCard>
                <InsideCard>
                    <CardTitle>Options</CardTitle>
                    <LineOption>
                        <LineTitle>Width: </LineTitle> 
                        <LineContent>
                            <Input type="number" value={width} onChange={e => setWidth(e.target.value)} />
                            <select value={widthUnit} onChange={e => setWidthUnit(e.target.value)}>
                                {optionsFull()}
                            </select>
                        </LineContent>
                    </LineOption>
                    <LineOption>
                        <LineTitle>Height: </LineTitle>
                        <LineContent>
                            <Input type="number" value={height} onChange={e => setHeight(e.target.value)} />
                            <select value={heightUnit} onChange={e => setHeightUnit(e.target.value)}>
                                {optionsFull()}
                            </select>
                        </LineContent>
                    </LineOption>
                    <LineOption>
                        <LineTitle>Color: </LineTitle>
                        <Input type="color" value={color} onChange={e => setColor(e.target.value)} />
                    </LineOption>
                    <LineOption>
                        <LineTitle>Border Radius Top Left:</LineTitle>
                        <LineContent>
                            <Input type="number" value={radiusTopLeft} onChange={e => setRadiusTopLeft(e.target.value)} />
                            <select value={radiusTopLeftUnit} onChange={e => setRadiusTopLeftUnit(e.target.value)}>
                                {optionsTwo()}
                            </select>
                        </LineContent>
                    </LineOption>
                    <LineOption>
                        <LineTitle>Border Radius Top Right: </LineTitle>
                        <LineContent>
                            <Input type="number" value={radiusTopRight} onChange={e => setRadiusTopRight(e.target.value)} />
                            <select value={radiusTopRightUnit} onChange={e => setRadiusTopRightUnit(e.target.value)}>
                                {optionsTwo()}
                            </select>
                        </LineContent>
                    </LineOption>
                    <LineOption>
                        <LineTitle>Border Radius Bottom Left: </LineTitle>
                        <LineContent>
                            <Input type="number" value={radiusBottomLeft} onChange={e => setRadiusBottomLeft(e.target.value)} />
                            <select value={radiusBottomLeftUnit} onChange={e => setRadiusBottomLeftUnit(e.target.value)}>
                                {optionsTwo()}
                            </select>
                        </LineContent>
                    </LineOption>
                    <LineOption>
                        <LineTitle>Border Radius Bottom Right: </LineTitle>
                        <LineContent>
                            <Input type="number" value={radiusBottomRight} onChange={e => setRadiusBottomRight(e.target.value)} />
                            <select value={radiusBottomRightUnit} onChange={e => setRadiusBottomRightUnit(e.target.value)}>
                                {optionsTwo()}
                            </select>
                        </LineContent>
                    </LineOption>
                </InsideCard>
                <InsideCard>
                    <CardTitle>CSS</CardTitle>
                    <ShowCss>
                        width: {width + widthUnit}; <br />
                        height: {height + heightUnit}; <br />
                        color: {color}; <br />
                        border-top-left-radius: {radiusTopLeft + radiusTopLeftUnit}; <br />
                        border-top-right-radius: {radiusTopRight + radiusTopRightUnit}; <br />
                        border-bottom-left-radius: {radiusBottomLeft + radiusBottomLeftUnit}; <br />
                        border-bottom-right-radius: {radiusBottomRight + radiusBottomRightUnit}; <br />
                    </ShowCss>
                </InsideCard>
            </LeftCard>
            <RightCard>
                <InsideCard>
                    <CardTitle>Result</CardTitle>
                    <CardPreview>
                        <ResultCard 
                            Width={width}
                            WidthUnit={widthUnit}
                            Height={height}
                            HeightUnit={heightUnit}
                            Color={color}
                            RadiusTopLeft={radiusTopLeft}
                            RadiusTopLeftUnit={radiusTopLeftUnit}
                            EadiusTopRight={radiusTopRight}
                            EadiusTopRightUnit={radiusTopRightUnit}
                            RadiusBottomLeft={radiusBottomLeft}
                            RadiusBottomLeftUnit={radiusBottomLeftUnit}
                            EadiusBottomRight={radiusBottomRight}
                            EadiusBottomRightUnit={radiusBottomRightUnit}
                        />
                    </CardPreview>
                </InsideCard>
            </RightCard>
        </Wrapper>
    );
}

export default App;
