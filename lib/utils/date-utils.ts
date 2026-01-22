export const formatDate = (
  date: Date | string,
  options = {
    monthNotation: "short",
    dayNotation: "numeric",
    yearNotation: "numeric",
    includeTime: true,
  },
): string => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...(options.includeTime
      ? {
          hour: "2-digit",
          minute: "2-digit",
        }
      : {}),
  });
};
