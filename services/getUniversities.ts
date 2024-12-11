export const getUniversities = async () => {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=United+Kingdom"
  );
  return await response.json();
};
