"use server";

const API_URL = process.env.API_URL ?? "https://portfolio-maker-3ny1.onrender.com";
// const API_URL = process.env.API_URL ?? "http://localhost:4000";

export const getPortfolio = async (id: string) => {
    const response = await fetch(`${API_URL}/api/portfolio/${id}`);
    return response.json();
};
