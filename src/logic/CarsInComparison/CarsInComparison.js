import carsData from "../../data/cars.json";

class CarsInComparison {
    static getCars() {
        let cars = localStorage.getItem("carsInComparison");
        if (!cars) cars = [];
        else cars = JSON.parse(cars);

        for (let i = 0; i < cars.length; i++) {
            cars[i] = parseInt(cars[i]);
        }

        return cars;
    }

    static getCarsDetailed() {
        let cars = localStorage.getItem("carsInComparison");
        if (!cars) cars = [];
        else cars = JSON.parse(cars);

        for (let i = 0; i < cars.length; i++) {
            let carId = parseInt(cars[i]);
            for (let j = 0; j < carsData.length; j++) {
                if (carsData[j].id === carId) {
                    cars[i] = carsData[j];
                }
            }
        }

        return cars;
    }

    static isCarIn(carId) {
        let cars = CarsInComparison.getCars();
        carId = parseInt(carId);
        for (let i = 0; i < cars.length; i++) {
            if (cars[i] === carId) {
                return true;
            }
        }
        return false;
    }

    static addCar(carId) {
        let cars = CarsInComparison.getCars();
        carId = parseInt(carId);

        cars.push(carId);
        localStorage.setItem("carsInComparison", JSON.stringify(cars));
    }

    static removeCar(carId) {
        let cars = CarsInComparison.getCars();
        carId = parseInt(carId)

        for (let i = 0; i < cars.length; i++) {
            if (cars[i] === carId) {
                cars.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("carsInComparison", JSON.stringify(cars));
    }
}

export default CarsInComparison;