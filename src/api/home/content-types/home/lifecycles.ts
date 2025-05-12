export default {
  async afterUpdate(event) {
    const { result, params } = event;
    console.log('After Update called');

    const wasDraft = params?.data?.publishedAt === undefined;
    const isNowPublished = result?.publishedAt;

    if (wasDraft && isNowPublished) {
      console.log('Entry was just published:', result.id);
    }
  },
};
