export const getError = (error: any): string => {
  if(error?.response?.data == "Unauthorized") {
    return "Incorrect email or password"
  }
  if (error?.response?.data?.type === "duplicate_error") {
    return "Email already exist";
  }
  return ""
}
