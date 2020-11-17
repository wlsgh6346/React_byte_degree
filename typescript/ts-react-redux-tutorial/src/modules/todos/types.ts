import { ActionType } from "typesafe-actions";
import * as actions from './actions';

type TodosAction = ActionType<typeof actions>;  // action.ts에서 export되는 모든 타입이 모아짐
