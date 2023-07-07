const GET = async endpoint => {
  const res = await fetch(`https://fakestoreapi.com/${endpoint}`);
  const data = await res.json();
  return data;
};

export default GET;
