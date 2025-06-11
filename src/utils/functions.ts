function isAuthenticated(): boolean {
  return !!localStorage.getItem("token");
}

export { isAuthenticated };
