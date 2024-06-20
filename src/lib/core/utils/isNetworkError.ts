export default (error: any): boolean => {
  return error instanceof Error && (error.message === 'Network Error' || error.name === 'NetworkError');
}