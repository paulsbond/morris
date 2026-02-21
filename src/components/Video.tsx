export function Video(props: { id: string }) {
  return (
    <iframe
      className="aspect-video max-w-lg"
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      allowFullScreen
    ></iframe>
  );
}
