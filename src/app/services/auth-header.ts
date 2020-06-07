export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user") as any);

    if (user && user.accessToken) {
        return { Authorization: "Bearer " + user.accessToken };
    } else {
        return {};
    }
}