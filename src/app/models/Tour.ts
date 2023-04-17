export type TourType = 'VACATION' | 'EXCURSION' | 'SHOPPING';

export interface ITour {
    id: number;
    travelAgentId: number;
    type: TourType;
    title: string;
    description: string;
    departurePlace: string;
    country: string;
    image: string;
    price: number;
    availablePlaces: number;
    startDate: Date;
    endDate: Date;
    isHot: boolean;
    hotDiscount: number;
}
