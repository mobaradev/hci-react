import styled from "styled-components";
import {Component} from "react";

import cars from "../../data/cars.json";
import CarsInComparison from "../../logic/CarsInComparison/CarsInComparison";
import ButtonHuge from "../../components/ButtonHuge/ButtonHuge";
import CarDetailsToolbox from "../../components/CarDetailsToolbox/CarDetailsToolbox";
import OffersList from "./OffersList/OffersList";
import OffersMap from "./OffersMap/OffersMap";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const TopSection = styled.div`
  width: 100%;
  height: calc(100% - 20px);
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

const CarContainer = styled.div`
  background-color: #C4C4C4;
  margin: 20px 20px;
  width: calc(50% - 40px);
  height: 100px;
  float: left;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

const Tab = styled.div`
  width: 150px;
  height: 40px;
  background-color: ${props => props.isSelected ? "#C4C4C4" : "transparent"};
  border-radius: 8px 8px 0 0;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-bottom: none;
  cursor: ${props => props.isSelected ? "default" : "pointer"};
  
  ${props => props.isSelected ? "font-weight: bold;" : ""}
  float: left;
`;


class OffersPage extends Component {
    constructor() {
        super();
        this.state = {
            carId: null,
            carData: null,
            pageMode: "list"
        }
    }

    componentDidMount() {
        const carId = this.getCarIdFromUrl();
        this.setState({
            carId: carId,
            carData: this.getCarData(carId)
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
                return car;
            }
        }

        return null;
    }

    setPageMode(mode) {
        this.setState({pageMode: mode});
    }

    handleToolboxChange = (newCarId) => {
        console.log("changed: " + newCarId)
        window.location.href = '/hci-project-public/offers/' + newCarId;
    }

    render() {
        return(
            <Container>
                {
                    this.state.carData
                        ?
                        <>
                            <TopSection>
                                <TopSectionWrapper>
                                    <CarDetailsToolbox carId={this.state.carId} handleToolboxChange={this.handleToolboxChange} style={{marginRight: 50}} />
                                    <Tab onClick={() => this.setPageMode("list")} isSelected={this.state.pageMode === "list"}>List of offers</Tab>
                                    <Tab onClick={() => this.setPageMode("map")} isSelected={this.state.pageMode === "map"}>Map</Tab>
                                    {
                                        this.state.pageMode === "list"
                                        ?
                                            <OffersList />
                                        :
                                            <OffersMap />
                                    }

                                </TopSectionWrapper>
                            </TopSection>
                            <BottomSection>
                            </BottomSection>
                        </>
                    :
                    ""
                }
            </Container>
        )
    }
}

export default OffersPage;