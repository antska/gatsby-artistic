// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const roomTemplate = require.resolve('./src/templates/Room.tsx');

  const result = await wrapper(
    graphql(`
      {
        rooms: allRoomsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `),
  );

  result.data.rooms.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: roomTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    });
  });
};
