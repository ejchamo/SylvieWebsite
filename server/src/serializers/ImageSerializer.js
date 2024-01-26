class ImageSerializer {
  static cleanImage(image) {
    const allowedAttributes = ["id", "title", "year", "medium", "dimensions", "image"];
    const serializedImage = {};
    for (const attribute of allowedAttributes) {
      serializedImage[attribute] = image[attribute];
    }
    return serializedImage;
  }
}

export default ImageSerializer;
