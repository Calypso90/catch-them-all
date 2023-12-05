export default async function Memes() {
  const url = "https://api.imgflip.com/get_memes";

  const response = await fetch(url);

  const data = await response.json();

  const images = data.data.memes;

  return (
    <div>
      <h3>Memes</h3>
      <p>
        Here's an API to fetch random memes: https://api.imgflip.com/get_memes
      </p>
      <div id="meme-container">
        {images.map((image) => {
          return (
            <img className="meme-image" src={image.url} alt="meme image" />
          );
        })}
      </div>
      <hr />
    </div>
  );
}
