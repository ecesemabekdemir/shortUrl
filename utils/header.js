const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkdGR0bG94Ynl4cGNqZG5lbHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODAsImV4cCI6MjA0MzM3ODY4MH0.LcbNjAXWi0h5ZSnW1NaFgflWkXTkq0an2-YBZJp8y0Q";

export const defaultHeader = {
  apikey: apikey,
  Authorization: `Bearer ${apikey}`,
  "Content-Type": "application/json",
};
