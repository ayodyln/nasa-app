export default function Home(props) {
  console.log(props.key);

  return <div>{props.nasa.title}</div>;
}

// //SSR
// export async function getServerSideProps(context) {
//   const key = process.env.KEY;
//   let date = "1999-02-13";

//   const res = await fetch(
//     `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       nasa: data,
//     },
//   };
// }

export async function getStaticProps() {
  const key = process.env.KEY;
  console.log(key);
  let date = "1999-02-13";

  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
  );
  const data = await res.json();

  return {
    props: { nasa: data, key: key },
  };
}
