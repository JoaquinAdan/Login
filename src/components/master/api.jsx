
export const api = () => {
    const URL =
    "https://633ee4220dbc3309f3c04d34.mockapi.io/client-information/client-information";
    const callApi = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    data.map((e) => {
      let random = Math.random();
      let b = random < 0.5;
      e.payment = b;
      return e;
    });
    setUsers(data);
    // console.log(data);
    };
}
export default api