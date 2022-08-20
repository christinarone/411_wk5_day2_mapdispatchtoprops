const addCar = (newCar) => {
    return {
        type: 'ADD_CAR',
        value: newCar
    }
}
const removeCar = (id) => {
    return {
        type: 'REMOVE_CAR',
        value: id
    }
}
export {addCar, removeCar}
