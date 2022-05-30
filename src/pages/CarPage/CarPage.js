import styled from "styled-components";
import {Component} from "react";
import SearchingBar from "../IndexPage/SearchingBar/SearchingBar";

import cars from "../../data/cars.json";
import Button from "../../components/Button/Button";
import ButtonHuge from "../../components/ButtonHuge/ButtonHuge";
import ButtonComparisonAdd from "../../components/ButtonComparisonAdd/ButtonComparisonAdd";
import CarsInComparison from "../../logic/CarsInComparison/CarsInComparison";
import CarDetailsToolbox from "../../components/CarDetailsToolbox/CarDetailsToolbox";
import {Link, Navigate} from "react-router-dom";

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
  align-items: stretch;
  gap: 60px;
  float: left;
`;

const Photo = styled.img`
    
`;

const InformationContainer = styled.div`
  width: 300px;
  float: left;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

class CarPage extends Component {
    constructor() {
        super();
        this.state = {
            carId: null,
            carData: null,
            isCarInComparison: false,
            redirectToCarId: null
        }
    }

    componentDidMount() {
        const carId = this.getCarIdFromUrl();
        this.setState({
            carId: carId,
            carData: this.getCarData(carId),
            isCarInComparison: CarsInComparison.isCarIn(carId)
        })
    }

    getCarIdFromUrl() {
        let url = window.location.href;
        if (url[url.length - 1] === "/") {
            url = url.slice(0, -1);
        }

        const carId = url.split("/")[url.split("/").length - 1];
        return carId;
    }

    getCarData(carId) {
        carId = parseInt(carId);
        for (let car of cars) {
            console.log(car.id)
            if (car.id === carId) {
                console.log('aaa')
                return car;
            }
        }

        return null;
    }

    comparisonButtonEventHandler = () => {
        if (CarsInComparison.isCarIn(this.state.carId)) {
            CarsInComparison.removeCar(this.state.carId);
        } else {
            CarsInComparison.addCar(this.state.carId);
        }
        setTimeout(() => {
            this.setState({
                isCarInComparison: CarsInComparison.isCarIn(this.state.carId)
            })
        }, 50)
    }

    handleToolboxChange = (newCarId) => {
        console.log("changed: " + newCarId)
        window.location.href = '/hci-project-public/car/' + newCarId;
    }

    render() {
        return(
            <>
                {
                    this.state.carData
                    ?
                        <Container>
                            <TopSection>
                                <Photo src={this.state.carData.photo} />
                                <InformationContainer>
                                    <CarDetailsToolbox carId={this.state.carId} handleToolboxChange={this.handleToolboxChange} />
                                </InformationContainer>
                            </TopSection>
                            <BottomSection>
                                <Link to={"/hci-project-public/offers/" + this.state.carId}><ButtonHuge>Show offers</ButtonHuge></Link>
                                <ButtonHuge>Price analysis</ButtonHuge>
                                <ButtonComparisonAdd isSelected={this.state.isCarInComparison} onClick={(e) => this.comparisonButtonEventHandler()} />
                            </BottomSection>
                        </Container>
                    :
                        ""
                }
            </>
        )
    }
}

export default CarPage;