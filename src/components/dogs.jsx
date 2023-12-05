export default async function Dogs() {
  const url = "https://dog.ceo/api/breeds/image/random/10";

  const response = await fetch(url);

  const data = await response.json();

  const images = data.message;

  return (
    <div>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:
        https://dog.ceo/api/breeds/image/random/10
      </p>
      <div id="dog-container">
        {images.map((image) => {
          return <img src={image} className="dog-image" alt="image of a dog" />;
        })}
      </div>
      <hr />
    </div>
  );
}
