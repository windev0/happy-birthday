function isAuthenticated(): boolean {
  return !!localStorage.getItem("user");
}

export { isAuthenticated };
