export type FlightAirportData = {
  code: string;
  name: string;
  timezone: string;
  airport_info_url: string;
  code_iata: string;
  code_icao: string;
};
export type FlightDataObject = {
  ident: string;
  inbound_fa_flight_id: string;
  status: string;
  cancelled: boolean;
  baggage_claim: string;
  actual_in: Date;
  actual_out: Date;
  estimated_in: Date;
  estimated_out: Date;
  origin: FlightAirportData;
  destination: FlightAirportData;
  progress_percent: number;
};

export type FlightResponseData = {
  flights: {
    ident: string;
    inbound_fa_flight_id: string;
    status: string;
    cancelled: boolean;
    baggage_claim: string;
    actual_in: Date;
    actual_out: Date;
    estimated_in: Date;
    estimated_out: Date;
    origin: FlightAirportData;
    destination: FlightAirportData;
  }[];
};
