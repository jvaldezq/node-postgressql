export class Product {
  name
  description
  ingredients
  productOptions
  extras
  images
  mainImage
  indications
  available
  related


  constructor(product) {
    this.name = product ? product.name : '';
    this.description = product ? product.description : '';
    this.ingredients = product ? product.ingredients : [];
    this.productOptions = product ? product.productOptions : [new ProductOptions()];
    this.extras = product ? product.extras : [new ProductExtras()];
    this.images = product ? product.images : [new Image()];
    this.mainImage = product ? product.mainImage : new Image();
    this.indications = product ? product.indications : '';
    this.available = product ? product.available : false;
    this.related = product ? product.related : [];
  }
}

class ProductOptions {
  name
  price

  constructor(productOptions) {
    this.name = productOptions ? productOptions.name : '';
    this.price = productOptions ? productOptions.price : 0;
  }
}

class Image {
  url
  alt

  constructor(image) {
    this.url = image ? image.url : '';
    this.alt = image ? image.alt : '';
  }
}

class ProductExtras {
  name
  price

  constructor(productExtras) {
    this.name = productExtras ? productExtras.name : '';
    this.price = productExtras ? productExtras.price : 0;
  }
}
