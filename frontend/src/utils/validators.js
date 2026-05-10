// Check empty fields
export const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

// Validate login form
export const validateLogin = (form) => {
  if (isEmpty(form.username)) return "Username is required";
  if (isEmpty(form.password)) return "Password is required";
  return null;
};

// Validate marks
export const validateMarks = (data) => {
  const { mid1, mid2, assignment } = data;

  if (mid1 > 25 || mid2 > 25) {
    return "Mid marks cannot exceed 25";
  }

  if (assignment > 5) {
    return "Assignment cannot exceed 5";
  }

  return null;
};