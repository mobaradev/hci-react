import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  height: 114px;
  padding: 16px;
  background-color: #C4C4C4;
  border: 0;
  border-radius: 8px;
  margin: 10px;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
  float: left;
  
  &:hover {
    background-color: #A1A1A1;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`

const Icon = styled.img`
  height: 100%;
  width: auto;
  float: left;
`;

const ButtonComparisonAdd = props => (
    <Container onClick={props.onClick}>
        {
            props.isSelected
            ?
                <>
                    <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/1200px-Flat_minus_icon_-_red.svg.png" />
                    <Title>Remove from comparison</Title>
                </>
            :
                <>
                    <Icon src="https://iconarchive.com/download/i80209/custom-icon-design/flatastic-1/add-1.ico" />
                    <Title>Add to comparison</Title>
                </>
        }

    </Container>
)

export default ButtonComparisonAdd;