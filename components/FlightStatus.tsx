import { FlightDataObject } from "@/common/types";
import FlightCard from "./FlightCard";
import styles from "@/styles/Tracker.module.css";
export default function FlightStatusCard(props: any) {
  if (!props.flightData.flights) return <span>Nothing found.</span>;
  return (
    <div>
      {...props.flightData.flights.map((x: FlightDataObject, i: number) => (
        <section className={styles.flightData} key={i}>
          <h3 className={styles.text_center}>{x.ident}</h3>
          <p className={styles.text_center}>{x.status}</p>
          <div className={styles.flightData__content}>
            <FlightCard
              name={x.origin.name}
              code_icao={x.origin.code_icao}
              timezone={x.origin.timezone}
              actual_out={new Date(x.estimated_out).toLocaleDateString(
                undefined,
                {
                  timeZone: x.origin.timezone,
                  hourCycle: "h12",
                  second: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            />
            {/* <div className={styles.line}> */}
            <progress
              style={{
                fontSize: "54px",
                marker: "none",
                color: "royalblue",
              }}
              max={100}
              value={x.progress_percent}
            >
              {x.progress_percent}%
            </progress>
            {/* </div> */}
            <FlightCard
              name={x.destination.name}
              code_icao={x.destination.code_icao}
              timezone={x.destination.timezone}
              actual_in={new Date(x.estimated_in).toLocaleDateString(
                undefined,
                {
                  timeZone: x.destination.timezone,
                  hourCycle: "h12",
                  second: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
