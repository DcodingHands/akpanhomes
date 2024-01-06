export const errorHandler = (statusCode, Message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
