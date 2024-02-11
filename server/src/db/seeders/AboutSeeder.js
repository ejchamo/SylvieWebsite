import { About } from "../../models/index.js";

class AboutSeeder {
  static async seed() {
    const aboutData = [
      {
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien eget nunc luctus tincidunt. Nulla facilisi. Suspendisse potenti. Vivamus auctor, dui nec tincidunt sus
        
        cipit, purus nunc suscipit justo, nec tincidunt turpis enim vel libero. Sed ac libero vitae libero semper malesuada. Nam eget est in nunc auctor sollicitudin. Aliquam erat volutpat. Sed`,
      },
    ];

    for (const singleAboutData of aboutData) {
      const currentAbout = await About.query().findOne({
        details: singleAboutData.details,
      });
      if (!currentAbout) {
        await About.query().insert(singleAboutData);
      }
    }
  }
}

export default AboutSeeder;
