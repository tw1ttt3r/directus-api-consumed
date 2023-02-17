import { Directus } from "@directus/sdk"
import * as dotenv from "dotenv"

const { parsed: { SOURCE, MODEL } } = dotenv.config()

async function getData() {
	const directus = new Directus(SOURCE)
	const data = await directus.items(MODEL).readByQuery()
	console.log("data", data)
}

getData()
