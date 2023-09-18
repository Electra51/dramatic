export default async function getAllProduct() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-cache",
   })
    if(!res.ok){
      throw new Error("failed to fetch users")
    }
    return await res.json()
  }