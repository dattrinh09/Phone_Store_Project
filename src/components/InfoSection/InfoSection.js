import React from 'react'
import { Button, Container } from '../../globalStyles'
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Price
} from './InfoSection.Elements'

const InfoSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTextDesc, 
    buttonLabel,
    description,
    headLine,
    lightText,
    start,
    img,
    alt,
    price,
    addToCart
}) => {

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </Subtitle>
                                <Price lightTextDesc={lightTextDesc}>
                                    {price}
                                </Price>
                                <Button big fontBig primary={primary} onClick={addToCart}>
                                    {buttonLabel}
                                </Button>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}
export default InfoSection