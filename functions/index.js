import imageUrlBuilder from '@sanity/image-url'

//sanity api client
const sanityClient = require('@sanity/client')


const builder = imageUrlBuilder(sanityClient);

export const imgUrl = (source) => {
  return builder.image(source);
}

