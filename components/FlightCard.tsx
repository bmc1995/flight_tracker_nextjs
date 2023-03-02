import styles from "@/styles/Card.module.css";
export default function FlightCard(props: any) {
  return (
    <div className={styles.card}>
      <p>{props.code_icao}</p>
      <p>{props.name}</p>
      <p>{props.estimated}</p>
      <p>{props.timezone}</p>
      <p>{props.estimated_in}</p>
      <p>{props.estimated_out}</p>
      <p>{props.actual_in}</p>
      <p>{props.actual_out}</p>
    </div>
  );
}
