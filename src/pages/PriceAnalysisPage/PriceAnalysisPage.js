import styled from "styled-components";
import {Component} from "react";

import cars from "../../data/cars.json";
import CarDetailsToolbox from "../../components/CarDetailsToolbox/CarDetailsToolbox";

import {VictoryArea, VictoryBar, VictoryChart} from 'victory';
import Clearfix from "../../components/Clearfix/Clearfix";



const data = [
    {quarter: 1, earnings: 100000},
    {quarter: 2, earnings: 45000},
    {quarter: 4, earnings: 40000},
    {quarter: 8, earnings: 14000}
];

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const ChartContainer = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  background-color: #C4C4C4;
  border-radius: 8px;
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


class PriceAnalysisPage extends Component {
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

                                    <ChartContainer>
                                        <VictoryChart data-aos="fade-left">
                                        <VictoryArea
                                            data={data}
                                            // data accessor for x values
                                            x="quarter"
                                            // data accessor for y values
                                            y="earnings"
                                        />
                                        </VictoryChart>
                                        <Clearfix />
                                    </ChartContainer>
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

export default PriceAnalysisPage;