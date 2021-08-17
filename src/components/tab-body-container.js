import styled from "styled-components";

const Container = styled.div`
    padding: 12px 64px;
`

export const TabBodyContainer = ({ children , main}) => {
    return (
        <Container>
            <h4>{ main }</h4>
            {children}
        </Container>
    )
}