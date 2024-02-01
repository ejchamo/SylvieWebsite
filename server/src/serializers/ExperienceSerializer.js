class ExperienceSerializer {
  static cleanExperience(experience) {
    const allowedAttributes = ["id", "title", "description"];
    const serializedExperience = {};
    for (const attribute of allowedAttributes) {
      serializedExperience[attribute] = experience[attribute];
    }
    return serializedExperience;
  }
}
export default ExperienceSerializer;
