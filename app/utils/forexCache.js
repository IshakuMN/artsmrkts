import fs from "fs";
import path from "path";
import axios from "axios";

const CACHE_FILE = path.join(process.cwd(), "data", "forexCache.json");
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getForexData() {
  try {
    // Check if cache exists and is valid
    if (fs.existsSync(CACHE_FILE)) {
      const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
      if (Date.now() - cacheData.timestamp < CACHE_DURATION) {
        return cacheData.data;
      }
    }

    // If cache is invalid or doesn't exist, fetch new data
    const response = await axios.get("https://open.er-api.com/v6/latest/USD");
    const data = response.data;

    // Save new data to cache
    const cacheData = { timestamp: Date.now(), data };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData));

    return data;
  } catch (error) {
    console.error("Error fetching or caching forex data:", error);
    return null;
  }
}
