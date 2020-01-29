module.exports = async (ctx, next) => {
  if (Math.rand() > 0.5) {
    throw new Error('test-error');
  }

  await next();
};
