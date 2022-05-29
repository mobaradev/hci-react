import styled from "styled-components";
import {Component} from "react";

import cars from "../../data/cars.json";
import CarsInComparison from "../../logic/CarsInComparison/CarsInComparison";
import ButtonHuge from "../../components/ButtonHuge/ButtonHuge";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const TopSection = styled.div`
  width: 100%;
  height: calc(100% - 240px);
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

const TopSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const CarContainerInfoWrapper = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  color: black;
  transition: 0.5s;
  float: left;
`;


const CarContainer = styled.div`
  background-color: #C4C4C4;
  margin: 20px 20px;
  width: calc(50% - 40px);
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  color: black;
  position: relative;
  float: left;

  ${CarContainerInfoWrapper}:hover {
    background-color: #A1A1A1;
  }
`;


const CarPhoto = styled.img`
  height: 100%;
  width: 150px;
  object-fit: cover;
  margin-right: 16px;
  float: left;
`;

const CarName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const CarRemoveIcon = styled.div`
  background-color: #948585;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  transition: 0.5s;

  &:hover {
    background-color: #cb4040;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;


class ComparisonPage extends Component {
    constructor() {
        super();
        this.state = {
            carsInComparison: []
        }
    }

    componentDidMount() {
        this.setState({
            carsInComparison: CarsInComparison.getCarsDetailed()
        })
    }

    getCarData(carId) {
        carId = parseInt(carId);
        for (let car of cars) {
            console.log(car.id)
            if (car.id === carId) {
                return car;
            }
        }

        return null;
    }

    removeCarFromComparison(carId) {
        console.log('remove + ' + carId)
        CarsInComparison.removeCar(carId);
        this.setState({
            carsInComparison: CarsInComparison.getCarsDetailed()
        })
    }

    render() {
        return(
            <Container>
                <TopSection>
                    <TopSectionWrapper>
                    {
                        this.state.carsInComparison.map(
                            car =>
                                <CarContainer>
                                    <Link to={"/car/" + car.id}>
                                        <CarContainerInfoWrapper>
                                            <CarPhoto src={car.photo} />
                                            <CarName>{car.name}</CarName>
                                            {car.generation} | {car.engine}
                                        </CarContainerInfoWrapper>
                                    </Link>
                                    <CarRemoveIcon onClick={() => this.removeCarFromComparison(car.id)}>
                                        <img src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-solid.png" width="32" height="32" />
                                    </CarRemoveIcon>
                                </CarContainer>
                        )
                    }
                    </TopSectionWrapper>
                </TopSection>
                <BottomSection>
                    <Link to="/comparisonResults"><ButtonHuge style={{backgroundColor: "#4EC670"}}>COMPARE</ButtonHuge></Link>
                </BottomSection>
            </Container>
        )
    }
}

export default ComparisonPage;