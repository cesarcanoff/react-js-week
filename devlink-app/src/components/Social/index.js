import "./social.css";

export function Social({ childreen, url }) {
  return (
    <a className="social" href={url} target="_blank" rel="noopener noreferrer">
      {childreen}
    </a>
  );
}
