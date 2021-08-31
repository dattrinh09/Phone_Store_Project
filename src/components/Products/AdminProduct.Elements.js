import styled from "styled-components"

export const ProductsContainer = styled.div`
    background: #fff;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
`

export const ProductContainer = styled.div`
    background: #333;
    color: #fff;
    margin: 15px;
    display: flex;
    border-radius: 8px;
    
    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

export const ProductImg = styled.img`
    height: 300px;
    max-width: 100%;
    min-width: 300px;
    align-items: center;
`

export const ProductInfo = styled.div`
    color: #fff;
    width: 100%;
    margin: 50px;
`

export const ProductTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 24px;
`

export const ProductDesc = styled.p`
    font-size: 22px;
    margin-bottom: 24px;
`

export const ProductPrice = styled.p`
    font-size: 22px;
    margin-bottom: 24px;
`

export const ProductQuantity = styled.p`
    font-size: 22px;
    margin-bottom: 24px;
`

export const DeleteButton = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 50px;
    width: 100%;

    &:hover{
        transition: all 0.3s ease-out;
        background-color: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
    }

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`

export const EditButton = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
    width: 100%;

    &:hover{
        transition: all 0.3s ease-out;
        background-color: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const ProductButton = styled.div`
    margin: 64px;
`
export const ProductInput = styled.input`
    width: 100%;
    height: 34px;
    font-size: 28px;
    margin-bottom: 20px;
    @media screen and (max-width: 960px){
        width: 80%;
    }
`


