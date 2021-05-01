import { combineReducers } from "redux";
import {
	traceResponseNew,
	spansWSameTraceIDResponse,
	servicesListItem,
	metricItem,
	topEndpointListItem,
	externalMetricsItem,
	usageDataItem,
	GlobalTime,
	customMetricsItem,
	TraceFilters,
} from "../actions";
import { updateGlobalTimeReducer } from "./global";
import {
	filteredTraceMetricsReducer,
	serviceMetricsReducer,
	serviceTableReducer,
	topEndpointsReducer,
	externalMetricsReducer,
} from "./metrics";
import { traceFiltersReducer, inputsReducer } from "./traceFilters";
import { traceItemReducer, tracesReducer } from "./traces";
import { usageDataReducer } from "./usage";

export interface StoreState {
	traceFilters: TraceFilters;
	inputTag: string;
	traces: traceResponseNew;
	traceItem: spansWSameTraceIDResponse;
	servicesList: servicesListItem[];
	serviceMetrics: metricItem[];
	topEndpointsList: topEndpointListItem[];
	externalMetrics: externalMetricsItem[];
	usageDate: usageDataItem[];
	globalTime: GlobalTime;
	filteredTraceMetrics: customMetricsItem[];
}

const reducers = combineReducers<StoreState>({
	traceFilters: traceFiltersReducer,
	inputTag: inputsReducer,
	traces: tracesReducer,
	traceItem: traceItemReducer,
	servicesList: serviceTableReducer,
	serviceMetrics: serviceMetricsReducer,
	topEndpointsList: topEndpointsReducer,
	externalMetrics: externalMetricsReducer,
	usageDate: usageDataReducer,
	globalTime: updateGlobalTimeReducer,
	filteredTraceMetrics: filteredTraceMetricsReducer,
});

export default reducers;
