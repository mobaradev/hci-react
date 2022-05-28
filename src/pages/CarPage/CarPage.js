import styled from "styled-components";
import {Component} from "react";
import SearchingBar from "../IndexPage/SearchingBar/SearchingBar";

import cars from "../../data/cars.json";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61dafb;
  float: left;
`;

class CarPage extends Component {
    constructor() {
        super();
        this.state = {
            carId: null,
            carData: null
        }
    }

    componentDidMount() {
        this.setState({
            carId: this.getCarIdFromUrl(),
            carData: this.getCarData(this.getCarIdFromUrl())
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

    render() {
        return(
            <Container>
                {
                    this.state.carData
                    ?
                        <h1>
                            {this.state.carData.name}
                        </h1>
                    :
                        ""
                }
            </Container>
        )
    }
}

export default CarPage;