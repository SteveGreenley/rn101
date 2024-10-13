import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import cars from '../../../data/cars.json';

export interface Car {
  id: number;
  make: string;
  model: string;
  year_of_first_manufacture: number;
  image_url: string;
}

export interface CarCollectionState {
  cars: Car[];
}

const initialState: CarCollectionState = {
  cars,
};

export const carCollectionSlice = createSlice({
  name: 'carCollection',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    },
    resetCars: state => {
      state.cars = initialState.cars;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCar, removeCar, resetCars } = carCollectionSlice.actions;

export default carCollectionSlice.reducer;
