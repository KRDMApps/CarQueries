declare module carQueryModels {
    export interface Make {
        id: number;
        name: string;
        niceName: string;
        models: Model[];
    }

    export interface Model {
        id: string;
        name: string;
        niceName: string;
        years: Year[];
    }

    export interface Rpm {
        horsepower: number;
        torque: number;
    }

    export interface Valve {
        timing: string;
        gear: string;
    }

    export interface Engine {
        id: string;
        name: string;
        equipmentType: string;
        compressionRatio: number;
        cylinder: number;
        size: number;
        displacement: number;
        configuration: string;
        fuelType: string;
        horsepower: number;
        torque: number;
        totalValves: number;
        manufacturerEngineCode: string;
        type: string;
        code: string;
        compressorType: string;
        rpm: Rpm;
        valve: Valve;
    }

    export interface Transmission {
        id: string;
        name: string;
        equipmentType: string;
        transmissionType: string;
        numberOfSpeeds: string;
    }

    export interface Primary {
        r: number;
        g: number;
        b: number;
        hex: string;
    }

    export interface ColorChips {
        primary: Primary;
    }

    export interface FabricType {
        name: string;
        value: string;
    }

    export interface Option {
        id: string;
        name: string;
        equipmentType: string;
        manufactureOptionName: string;
        manufactureOptionCode: string;
        colorChips: ColorChips;
        fabricTypes: FabricType[];
    }

    export interface Color {
        category: string;
        options: Option[];
    }

    export interface Price {
        baseMSRP: number;
        baseInvoice: number;
        deliveryCharges: number;
        usedTmvRetail: number;
        usedPrivateParty: number;
        usedTradeIn: number;
        estimateTmv: boolean;
        tmvRecommendedRating: number;
    }

    export interface Categories {
        market: string;
        EPAClass: string;
        vehicleSize: string;
        crossover: string;
        primaryBodyType: string;
        vehicleStyle: string;
        vehicleType: string;
    }

    export interface Year {
        id: number;
        year: number;
    }

    export interface Submodel {
        body: string;
        modelName: string;
        niceName: string;
    }

    export interface MPG {
        highway: string;
        city: string;
    }

    export interface Style {
        make: Make;
        model: Model;
        engine: Engine;
        transmission: Transmission;
        drivenWheels: string;
        numOfDoors: string;
        options: any[];
        colors: Color[];
        manufacturerCode: string;
        price: Price;
        categories: Categories;
        id: number;
        name: string;
        year: Year;
        submodel: Submodel;
        trim: string;
        states: string[];
        squishVins: string[];
        MPG: MPG;
    }

    export interface RootObject {
        styles: Style[];
        stylesCount: number;
    }
}