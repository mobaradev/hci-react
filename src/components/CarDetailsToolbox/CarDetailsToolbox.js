import styled from "styled-components";
import {Component} from "react";
import CarsInComparison from "../../logic/CarsInComparison/CarsInComparison";
import cars from "../../data/cars.json";
import Select from "../Select/Select";
import Clearfix from "../Clearfix/Clearfix";

const Container = styled.div`
  width: 300px;
  height: 100%;
  background-color: #C4C4C4;
  border-radius: 8px;
  padding: 8px 12px;
  float: left;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const InformationField = styled.div`

`;

const InformationTextarea = styled.textarea`
  margin-top: 20px;
  width: 100%;
  height: auto;
  min-height: 100px;
  border: 1px solid gray;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  padding: 12px;
  resize: none;
  float: left;
`

class CarDetailsToolbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carId: null,
            carData: null,
            informationTextareaData: ""
        }
    }

    componentDidMount() {
        const carId = this.props.carId;
        this.setState({
            carId: carId,
            carData: this.getCarData(carId)
        }, () => {
            this.prepareInformationTextarea();
        })
    }

    prepareInformationTextarea() {
        if (!this.state.carData) return;
        if (!this.state.carData.statistics) return;
        let content = `Fuel usage: ${this.state.carData.statistics.fuelUsage}\nNumber of seats: ${this.state.carData.statistics.numberOfSeats}\nMax speed: ${this.state.carData.statistics.maxSpeed}`;
        this.setState({informationTextareaData: content})
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

    getCarIdFromGenerationChange(e) {
        let generations = this.state.carData.generationAlternatives;
        for (let i = 0; i < generations.length; i++) {
            if (generations[i].name == e.target.value) {
                return generations[i].id;
            }
        }
    }

    getCarIdFromEngineChange(e) {
        let engines = this.state.carData.engineAlternatives;
        for (let i = 0; i < engines.length; i++) {
            if (engines[i].name == e.target.value) {
                return engines[i].id;
            }
        }
    }

    handleGenerationChange(e) {
        let newCarId = this.getCarIdFromGenerationChange(e);

        this.props.handleToolboxChange(newCarId);
    }

    handleEngineChange(e) {
        let newCarId = this.getCarIdFromEngineChange(e);

        this.props.handleToolboxChange(newCarId);
    }

    render() {
        return(
            <Container style={this.props.style} data-aos="fade-left">
                {
                    this.state.carData
                        ?
                            <>
                               <h2>{this.state.carData.name}</h2>
                                {
                                    this.props.showPhoto
                                    ?
                                        <Photo src={this.state.carData.photo} />
                                    :
                                        ""
                                }
                                Generacja:
                                <Select onChange={(e) => this.handleGenerationChange(e)}>
                                    <option>{this.state.carData.generation}</option>
                                    {this.state.carData.generationAlternatives ? this.state.carData.generationAlternatives.map(
                                        alternative => <option>{alternative.name}</option>
                                        )
                                        : ""
                                    }
                                </Select>
                                <Clearfix />
                                Silnik:
                                <Select onChange={(e) => this.handleEngineChange(e)}>
                                    <option>{this.state.carData.engine}</option>
                                    {this.state.carData.engineAlternatives ? this.state.carData.engineAlternatives.map(
                                        alternative => <option>{alternative.name}</option>
                                    )
                                        :
                                        ""
                                    }
                                </Select>
                                <Clearfix />
                                <InformationTextarea disabled="disabled" value={this.state.informationTextareaData} />
                            </>
                        :
                        ""
                }
            </Container>
        )
    }
}

export default CarDetailsToolbox;