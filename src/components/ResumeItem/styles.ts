import styled from 'styled-components';


export const Container = styled.div`
    flex: 1;
`;
export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-top: 5px;
`;
export const Info = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${(props: { color: string; }) => props.color ?? '#000' };
`;