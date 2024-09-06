import { NextResponse } from "next/server";
import axios from "axios";

let cachedData = null;
let lastFetchTime = null;

export async function GET() {
  const currentTime = new Date();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  // If we have cached data and it's less than a day old, return it
  if (
    cachedData &&
    lastFetchTime &&
    currentTime - lastFetchTime < oneDayInMilliseconds
  ) {
    console.log(cachedData, ": data");
    return NextResponse.json(cachedData);
  }

  // Otherwise, fetch new data
  try {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1,
    ).padStart(2, "0")}-${String(today.getDate() - 1).padStart(2, "0")}`;

    const instruments = [
      {
        symbol: "C:XAUUSD",
        name: "XAUUSD",
        description: "Gold vs US Dollar",
        img: "/gold.png",
      },
      {
        symbol: "C:EURUSD",
        name: "EURUSD",
        description: "Euro vs US Dollar",
        img: "/euro.png",
      },{
        symbol: "BRN",
        name: "BRENT",
        description: "Brent Crude Oil",
        img: "/oil.png",
      },
      {
        symbol: "US30",
        name: "US30",
        description: "US 30Index",
        img: "/us.png",
      },
      {
        symbol: "GBPUSD",
        name: "GBPUSD",
        description: "Pound vs US Dollar",
        img: "/GBPUSD.png",
      },
    ];

    const responses = await Promise.all(
      instruments.map((instrument) =>
        axios.get(
          `https://api.polygon.io/v2/aggs/ticker/${instrument.symbol}/range/1/day/${formattedDate}/${formattedDate}?apiKey=VW0iNVW61DehUZ_0B7TWkudreEmOb_UP`,
        ),
      ),
    );

    cachedData = responses.map((response, index) => {
      const data = response.data?.results?.[0] ?? null;
      console.log("data: ", data);
      return {
        name: instruments[index].name,
        description: instruments[index].description,
        img: instruments[index].img,
        bid: data?.c || "_",
        ask: data?.c ? data.c - 0.03 : "_",
        spread: 0.03,
      };
    });

    lastFetchTime = currentTime;
    return NextResponse.json(cachedData);
  } catch (error) {
    console.error("Error fetching prices:", error);
    return NextResponse.json(
      { error: "Error fetching prices" },
      { status: 500 },
    );
  }
}
