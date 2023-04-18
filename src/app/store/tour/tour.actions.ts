import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ITour } from "src/app/models/Tour";

export const TourActions = createActionGroup({
  source: 'TOUR',
  events: {
    'Get All Tours': emptyProps(),
    'Get All Tours Success': props<{ tours: ITour[] }>(),
    'Get All Tours Failure': props<{ error: string }>(),
    'Get Tour': props<{ id: number }>(),
    'Get Tour Success': props<{ tour: ITour }>(),
    'Get Tour Failure': props<{ error: string }>(),
    'Create Tour': props<{ tour: ITour }>(),
    'Create Tour Success': props<{ tour: ITour }>(),
    'Create Tour Failure': props<{ error: string }>(),
    'Update Tour': props<{ tour: ITour }>(),
    'Update Tour Success': props<{ tour: ITour }>(),
    'Update Tour Failure': props<{ error: string }>(),
    'Delete Tour': props<{ id: number }>(),
    'Delete Tour Success': props<{ id: number }>(),
    'Delete Tour Failure': props<{ error: string }>(),
  },
});
