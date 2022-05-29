import styled from "styled-components";
import {Component} from "react";

import cars from "../../data/cars.json";
import CarsInComparison from "../../logic/CarsInComparison/CarsInComparison";
import ButtonHuge from "../../components/ButtonHuge/ButtonHuge";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const TopSection = styled.div`
  width: 100%;
  height: calc(100% - 120px);
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
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`

const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: inherit;
  border-spacing: 4px 10px;
`

const Tr = styled.tr`
  background-color: #d5d5d5;
  transition: 0.5s;
  
  &:hover {
    background-color: #C4C4C4;
  }
`;

const Td = styled.td`
  padding: 8px;
`;

const Photo = styled.img`
  width: 128px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;


class ComparisonResultsPage extends Component {
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
                        <Table>
                            <Tr>
                                <Td></Td>
                                {
                                    this.state.carsInComparison.map(car => <Td><b>{car.name}</b></Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Generation</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td>{car.generation}</Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Engine</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td>{car.engine}</Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Photo</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td><Photo src={car.photo} /></Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Fuel usage</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td>{car.statistics.fuelUsage}l / 100km</Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Number of seats</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td>{car.statistics.numberOfSeats}</Td>)
                                }
                            </Tr>
                            <Tr>
                                <Td>Max speed</Td>
                                {
                                    this.state.carsInComparison.map(car => <Td>{car.statistics.maxSpeed}</Td>)
                                }
                            </Tr>
                        </Table>
                    </TopSectionWrapper>
                </TopSection>
                <BottomSection>
                    <Button>Generate PDF</Button>
                </BottomSection>
            </Container>
        )
    }
}

export default ComparisonResultsPage;