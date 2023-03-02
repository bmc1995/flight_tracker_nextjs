import Head from "next/head";
import useSWRImmutable from "swr/immutable";
import styles from "@/styles/Tracker.module.css";
import FlightCard from "@/components/FlightCard";
import { apiCall, fallback, identType } from "@/common/constants";
import { FlightDataObject, FlightResponseData } from "@/common/types";
import { useState } from "react";
import { fetcher } from "@/common/util/fetcher";
import FlightStatusCard from "@/components/FlightStatus";
export default function Tracker() {
  const [data, setData] = useState<FlightDataObject>();
  const [designator, setDesignator] = useState("");
  const getFlight = () =>
    fetch(
      apiCall.FLIGHT_SEARCH + `?ident=${designator}&${identType.DESIGNATOR}`
    )
      .then(async (res) => setData(await res.json()))
      .catch((err) => console.error(err));
  console.log(designator);

  return (
    <>
      <Head>
        <title>Search for Flights</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.text_center}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getFlight();
          }}
        >
          <label htmlFor="designator">Designator:</label>
          <input
            type="text"
            id="designator"
            value={designator}
            onChange={(e) => setDesignator(e.target.value)}
            name="designator"
            minLength={3}
            required
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {data ? (
            <FlightStatusCard flightData={data} />
          ) : (
            <span>Search for a flight using it&apos;s ICAO designator</span>
          )}
        </div>
      </main>
    </>
  );
}
