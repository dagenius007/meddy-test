const updatePageQuery = (url: URL, page: number) => {
  url.searchParams.set("page", page.toString());
  window.history.pushState(null, "", url);
};

export { updatePageQuery };
