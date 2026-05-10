// utils/calculateMarks.js

exports.calculateTotal = (mid1, mid2, assignment) => {
  // Convert to numbers (safety)
  mid1 = Number(mid1);
  mid2 = Number(mid2);
  assignment = Number(assignment);

  // Validation
  if (mid1 < 0 || mid2 < 0 || assignment < 0) {
    throw new Error("Marks cannot be negative");
  }

  if (mid1 > 25 || mid2 > 25) {
    throw new Error("Mid marks cannot exceed 25");
  }

  if (assignment > 5) {
    throw new Error("Assignment cannot exceed 5");
  }

  const bestMid = Math.max(mid1, mid2);
  const secondMid = Math.min(mid1, mid2);

  // Best-of-two formula
  const internal = bestMid * 0.8 + secondMid * 0.2;

  const total = internal + assignment;

  return Math.round(total);
};