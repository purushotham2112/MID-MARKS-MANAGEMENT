// Format date
export const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
};

// Capitalize first letter
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Calculate total marks (best-of-two)
export const calculateTotal = (mid1, mid2, assignment) => {
  const m1 = Number(mid1) || 0;
  const m2 = Number(mid2) || 0;
  const assign = Number(assignment) || 0;

  const best = Math.max(m1, m2);
  const second = Math.min(m1, m2);

  const total = Math.round(best * 0.8 + second * 0.2 + assign);

  return total;
};