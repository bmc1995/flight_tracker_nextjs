import { headerK, misc } from "@/common/constants";
import { FlightResponseData } from "@/common/types";
import type { NextApiRequest, NextApiResponse } from "next";

// Will search for flights from 12:00AM today through 11:59PM tommorow.
const today = new Date(Date.now()).toDateString();
const tommorow = new Date(Date.now() + misc.dayInMs * 2).toDateString();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FlightResponseData>
) {
  const { ident, identType } = req.query;
  const url = new URL(
    `${process.env.AEROAPI_URL}${ident}?ident_type=${identType}&start=${today}&end=${tommorow}`
  );
  console.log(url);
  try {
    const data: FlightResponseData = await fetch(url, {
      headers: [[headerK.XAPI_KEY, `${process.env.AEROAPI_KEY}`]],
    })
      .then((val) => val.json())
      .catch((err) => err);
    res.json(data);
  } catch (err: any) {
    res.status(500).send(err);
  }
}
