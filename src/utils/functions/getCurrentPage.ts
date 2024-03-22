export const getCurrentPage = (pathname: string) => {
  // the string splits the URL using the "/" separator and extracts the last part of the URL
  // https://ydem1.github.io/deayoop/user/help ----> help
  const lastPart = pathname.split('/').slice(-1)[0];

  // write the letter of the current page with a capital letter 
  // help ---> Help
  const currentPage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  return [lastPart, currentPage];
};