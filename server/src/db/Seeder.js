/* eslint-disable no-console */
import { connection } from "../boot.js";
import AboutSeeder from "./seeders/AboutSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding about...");
    await AboutSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
