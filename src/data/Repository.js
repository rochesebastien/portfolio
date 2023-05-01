export async function getAllProjects() {
  try {
    const response = await fetch('/test.json,');
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
    return null;
  }
}